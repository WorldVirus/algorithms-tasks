// https://leetcode.com/problems/unique-paths-ii/
package uniqe_path_ii

func uniquePathsWithObstacles(obstacleGrid [][]int) int {
	r_size := len(obstacleGrid)
	c_size := len(obstacleGrid[0])

	matrix := make([][]int, r_size)
	for i := 0; i < r_size; i += 1 {
		matrix[i] = make([]int, c_size)
	}

	if obstacleGrid[0][0] != 1 {
		matrix[0][0] = 1
	}

	for i := 0; i < r_size; i += 1 {
		for j := 0; j < c_size; j += 1 {
			if obstacleGrid[i][j] != 1 {
				if i-1 >= 0 && obstacleGrid[i-1][j] != -1 {
					matrix[i][j] += matrix[i-1][j]
				}
				if j-1 >= 0 && obstacleGrid[i][j-1] != -1 {
					matrix[i][j] += matrix[i][j-1]
				}
			}
		}
	}

	return matrix[r_size-1][c_size-1]
}
