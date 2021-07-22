// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
package minimum_numbers_arrows

import "sort"

func findMinArrowShots(points [][]int) int {
	answer := 1
	sort.SliceStable(points, func(i, j int) bool {
		return points[i][1] < points[j][1]
	})

	curPos := 0
	for i := 1; i < len(points); i += 1 {
		if points[i][0] <= points[curPos][1] {
			continue
		}

		curPos = i
		answer += 1 // 2
	}

	return answer
}
