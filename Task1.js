/**
 * Approach:
* We can solve this problem using Kahn's Algorithm for topological sorting or Depth First Search (DFS) to detect back edges (which indicate cycles).
*  In this solution, we'll use the DFS approach to detect cycles.
* A back edge in DFS traversal indicates a cycle. The algorithm works as follows:
* Use a visited array to mark nodes as visited.
* Use a recStack (recursion stack) to track nodes in the current path of DFS. If you encounter a node that is already in recStack, it indicates a cycle.
* Traverse all nodes, because the graph may be disconnected.
 */


class Graph {
    constructor(A) {
        this.nodes = A;
        this.adjList = new Map();
    }

    addEdge(u, v) {
        if (!this.adjList.has(u)) {
            this.adjList.set(u, []);
        }
        this.adjList.get(u).push(v);
    }

    isCyclicUtil(v, visited, recStack) {
        // Mark the current node as visited and add it to the recursion stack
        visited[v] = true;
        recStack[v] = true;

        // Traverse all adjacent nodes
        const neighbors = this.adjList.get(v) || [];
        for (let neighbor of neighbors) {
            if (!visited[neighbor] && this.isCyclicUtil(neighbor, visited, recStack)) {
                return true;
            } else if (recStack[neighbor]) {
                return true; // Cycle detected
            }
        }

        recStack[v] = false; // Remove the node from recursion stack
        return false;
    }

    containsCycle() {
        const visited = Array(this.nodes + 1).fill(false);
        const recStack = Array(this.nodes + 1).fill(false);

        // Check each node
        for (let i = 1; i <= this.nodes; i++) {
            if (!visited[i] && this.isCyclicUtil(i, visited, recStack)) {
                return 1; // Cycle found
            }
        }
        return 0; // No cycle
    }
}

function detectCycle(A, B) {
    const graph = new Graph(A);

    // Create the directed graph
    for (let [u, v] of B) {
        graph.addEdge(u, v);
    }

    return graph.containsCycle();
}
/**
 * Time Complexity:
 * Building the graph takes O(M) where M is the number of edges.
 * DFS traversal for detecting the cycle takes O(A + M), where A is the number of nodes and M is the number of edges.
 * Overall Time Complexity: O(A + M)

 * Space Complexity:
 * The adjacency list takes O(A + M) space.
 * The visited and recStack arrays take O(A) space.
 * Overall Space Complexity: O(A + M)
 */
// Example usage:
const A = 5;
const B1 = [[1, 2], [4, 1], [2, 4], [3, 4], [5, 2], [1, 3]];
const B2 = [[1, 2], [2, 3], [3, 4], [4, 5]];

console.log(detectCycle(A, B1)); // Output: 1 (Cycle found)
console.log(detectCycle(A, B2)); // Output: 0 (No cycle)
