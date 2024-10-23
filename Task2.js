/**
 * Approach:
 * This is a standard DFS traversal problem where you need to count root-to-leaf paths that satisfy the constraint. 
 * We perform DFS starting from the root (node 1) and track the number of "good" nodes along the path. 
 * If at any point the count exceeds C, we stop traversing that path.
 */


class Tree {
    constructor(N) {
        this.nodes = N;
        this.adjList = new Map();
    }

    addEdge(u, v) {
        if (!this.adjList.has(u)) {
            this.adjList.set(u, []);
        }
        this.adjList.get(u).push(v);
        if (!this.adjList.has(v)) {
            this.adjList.set(v, []);
        }
        this.adjList.get(v).push(u); // Since it's an undirected tree
    }

    countPaths(A, C) {
        let count = 0;
        const visited = Array(this.nodes + 1).fill(false);

        const dfs = (node, goodCount) => {
            visited[node] = true;
            if (A[node - 1] === 1) {
                goodCount++;
            }
            if (goodCount > C) {
                return; // Stop traversing this path
            }

            let isLeaf = true;
            for (let neighbor of this.adjList.get(node) || []) {
                if (!visited[neighbor]) {
                    isLeaf = false;
                    dfs(neighbor, goodCount);
                }
            }

            if (isLeaf) {
                count++; // Found a valid root-to-leaf path
            }
        };

        dfs(1, 0); // Start DFS from root (node 1) with 0 good nodes
        return count;
    }
}

function countValidPaths(N, A, B, C) {
    const tree = new Tree(N);

    // Create the undirected tree
    for (let [u, v] of B) {
        tree.addEdge(u, v);
    }

    return tree.countPaths(A, C);
}
/**
 * Time Complexity:
 * Building the tree takes O(N).
 * DFS traversal takes O(N).
 * Overall Time Complexity: O(N)

 * Space Complexity:
 * The adjacency list takes O(N) space.
 * The visited array takes O(N) space.
 * Overall Space Complexity: O(N)
 */
// Example usage:
const A1 = [0, 1, 0, 1, 1, 1];
const B1 = [[1, 2], [1, 5], [1, 6], [2, 3], [2, 4]];
const C1 = 1;
const C2 = 2;

console.log(countValidPaths(6, A1, B1, C1)); // Output: 3
console.log(countValidPaths(6, A1, B1, C2)); // Output: 4
