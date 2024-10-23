# Graph and Tree Algorithms

This repository contains solutions to two tasks related to graphs and trees, implemented in JavaScript.

## Task 1: Detect Cycle in a Directed Graph

### Problem
Given a directed graph with `A` nodes and `B` edges, determine if the graph contains a cycle.

### Input
- `A`: Number of nodes (integer)
- `B`: Edges of the graph as an array of pairs `[u, v]` representing a directed edge from node `u` to node `v`.

### Output
- `1` if the graph contains a cycle, otherwise `0`.

### Approach
- The solution uses **Depth First Search (DFS)** to detect back edges, which indicate a cycle in the graph.

### Time Complexity
- **O(A + M)**, where `A` is the number of nodes and `M` is the number of edges.

### Space Complexity
- **O(A + M)** due to the adjacency list and recursion stack.

---

## Task 2: Count Root-to-Leaf Paths in a Tree with Constraints

### Problem
Given a tree with `N` nodes rooted at node `1`, count the number of root-to-leaf paths that contain at most `C` good nodes.

### Input
- `N`: Number of nodes in the tree.
- `A`: Binary array where `A[i]` is `1` if the `i-th` node is good, otherwise `0`.
- `B`: Edges of the tree as an array of pairs `[u, v]`.
- `C`: Maximum number of good nodes allowed in the path.

### Output
- Number of root-to-leaf paths that meet the constraint.

### Approach
- The solution uses **Depth First Search (DFS)** to traverse the tree and count valid paths.

### Time Complexity
- **O(N)** for DFS traversal.

### Space Complexity
- **O(N)** due to the adjacency list and recursion stack.
# Graph-and-Tree-Algorithms
