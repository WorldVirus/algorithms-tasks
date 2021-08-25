// https://leetcode.com/problems/pascals-triangle-ii/
package pascal_triangle

import "fmt"

func getRow(rowIndex int) []int {
	answer := []int{}
	dp := map[string]int{}
	for i := 0; i <= rowIndex; i += 1 {
		answer = append(answer, calc(rowIndex, i, dp))
	}

	return answer
}

func calc(row, col int, dp map[string]int) int {
	if row == 0 || col == 0 || row == col {
		return 1
	}

	key := fmt.Sprint(row) + fmt.Sprint(col)
	if val, ok := dp[key]; ok {
		return val
	}

	curVal := calc(row-1, col-1, dp) + calc(row-1, col, dp)

	dp[key] = curVal

	return curVal
}
