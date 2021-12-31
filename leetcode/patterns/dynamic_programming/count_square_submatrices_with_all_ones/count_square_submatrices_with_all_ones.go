// https://leetcode.com/problems/count-square-submatrices-with-all-ones/
package count_square_submatrices_with_all_ones

func countSquares(matrix [][]int) int {
	var answer int
	for i := 0; i < len(matrix); i += 1 {
		for j := 0; j < len(matrix[0]); j += 1 {
			if matrix[i][j] == 1 {
				if i == 0 || j == 0 {
					answer += 1 // 5
					continue
				}

				matrix[i][j] += MinOf(matrix[i][j-1], matrix[i-1][j], matrix[i-1][j-1])

				answer += matrix[i][j]
			}
		}
	}

	return answer
}

func MinOf(vars ...int) int {
	min := vars[0]

	for _, i := range vars {
		if min > i {
			min = i
		}
	}

	return min
}
