// https://leetcode.com/problems/shortest-bridge/
package shortest_bridge

import "math"

// Not Submited
func shortestBridge(grid [][]int) int {
	var isFirstBirdgeMarked bool
	min := math.MaxInt32
	for i := 0; i < len(grid); i += 1 {
		for j := 0; j < len(grid[0]); j += 1 {
			if grid[i][j] == 1 {
				stack := [][]int{}
				stack = append(stack, []int{i, j})

				for len(stack) > 0 {
					curIndexes := stack[len(stack)-1]
					stack = stack[:len(stack)-1]
					if !isFirstBirdgeMarked {
						grid[curIndexes[0]][curIndexes[1]] = -1
					} else {
						grid[curIndexes[0]][curIndexes[1]] = -2
						tempMin := math.MaxInt32
						calcShortestDist(grid, curIndexes[0], curIndexes[1], 0, &tempMin)
						if tempMin < min {
							min = tempMin
						}
					}

					if curIndexes[0]-1 >= 0 && grid[curIndexes[0]-1][curIndexes[1]] == 1 {
						stack = append(stack, []int{curIndexes[0] - 1, curIndexes[1]})
					}

					if curIndexes[0]+1 < len(grid) && grid[curIndexes[0]+1][curIndexes[1]] == 1 {
						stack = append(stack, []int{curIndexes[0] + 1, curIndexes[1]})
					}

					if curIndexes[1]-1 >= 0 && grid[curIndexes[0]][curIndexes[1]-1] == 1 {
						stack = append(stack, []int{curIndexes[0], curIndexes[1] - 1})
					}

					if curIndexes[1]+1 < len(grid[0]) && grid[curIndexes[0]-1][curIndexes[1]] == 1 {
						stack = append(stack, []int{curIndexes[0], curIndexes[1] + 1})
					}
				}

				isFirstBirdgeMarked = true
			}
		}
	}

	return min - 1
}

func calcShortestDist(grid [][]int, index_i, index_j, curMin int, min *int) {

	if grid[index_i][index_j] == -1 {
		if curMin < *min {
			*min = curMin
		}

		return
	}

	grid[index_i][index_j] = -2

	if index_i-1 >= 0 && (grid[index_i-1][index_j] == 0 || grid[index_i-1][index_j] == -1) {
		calcShortestDist(grid, index_i-1, index_j, curMin+1, min)
	}

	if index_i+1 < len(grid) && (grid[index_i+1][index_j] == 0 || grid[index_i+1][index_j] == -1) {
		calcShortestDist(grid, index_i+1, index_j, curMin+1, min)
	}

	if index_j-1 >= 0 && (grid[index_i][index_j-1] == 0 || grid[index_i][index_j-1] == -1) {
		calcShortestDist(grid, index_i, index_j-1, curMin+1, min)
	}

	if index_j+1 < len(grid[0]) && (grid[index_i][index_j+1] == 1 || grid[index_i][index_j+1] == -1) {
		calcShortestDist(grid, index_i, index_j+1, curMin+1, min)

	}

}

// [[1,1,1,1,1],
//  [1,0,0,0,1],
//  [1,0,1,0,1],
//  [1,0,0,0,1],

//  [[1,0,1,1,1],
//  [0,0,0,0,1],
//  [0,1,,0,1],
//  [0,1,0,0,1],

// [[1,0,0,0,1],
//  [1,0,0,1,1],
//  [1,0,0,0,1],
//  [1,0,0,0,1],

//  [[0,1],
//   [1,0]]

//  [[0,1,1],
//   [0,0,0],
//   [0,1,1]]

//  Time:O(max(len(bridge_first))*bridge_second)
//  Memory: O(1)

// Java Solution
// class Solution {
//     public int shortestBridge(int[][] A) {
//         int m = A.length, n = A[0].length;
//         boolean[][] visited = new boolean[m][n];
//         int[][] dirs = new int[][]{{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
//         Queue<int[]> q = new LinkedList<>();
//         boolean found = false;
//         // 1. dfs to find an island, mark it in `visited`
//         for (int i = 0; i < m; i++) {
//             if (found) {
//                 break;
//             }
//             for (int j = 0; j < n; j++) {
//                 if (A[i][j] == 1) {
//                     dfs(A, visited, q, i, j, dirs);
//                     found = true;
//                     break;
//                 }
//             }
//         }
//         // 2. bfs to expand this island
//         int step = 0;
//         while (!q.isEmpty()) {
//             int size = q.size();
//             while (size-- > 0) {
//                 int[] cur = q.poll();
//                 for (int[] dir : dirs) {
//                     int i = cur[0] + dir[0];
//                     int j = cur[1] + dir[1];
//                     if (i >= 0 && j >= 0 && i < m && j < n && !visited[i][j]) {
//                         if (A[i][j] == 1) {
//                             return step;
//                         }
//                         q.offer(new int[]{i, j});
//                         visited[i][j] = true;
//                     }
//                 }
//             }
//             step++;
//         }
//         return -1;
//     }
//     private void dfs(int[][] A, boolean[][] visited, Queue<int[]> q, int i, int j, int[][] dirs) {
//         if (i < 0 || j < 0 || i >= A.length || j >= A[0].length || visited[i][j] || A[i][j] == 0) {
//             return;
//         }
//         visited[i][j] = true;
//         q.offer(new int[]{i, j});
//         for (int[] dir : dirs) {
//             dfs(A, visited, q, i + dir[0], j + dir[1], dirs);
//         }
//     }
// }
