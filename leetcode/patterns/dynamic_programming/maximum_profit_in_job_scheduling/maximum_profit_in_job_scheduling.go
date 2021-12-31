// https://leetcode.com/problems/maximum-profit-in-job-scheduling/
package maximum_profit_in_job_scheduling

import "sort"

func jobScheduling(startTime []int, endTime []int, profit []int) int {
	segment := make([][]int, len(startTime))

	for i := 0; i < len(startTime); i += 1 {
		segment[i] = []int{startTime[i], endTime[i], profit[i]}
	}

	sort.SliceStable(segment, func(a, b int) bool {
		return segment[a][0] < segment[b][0]
	})

	return calcMax(segment, 0, map[int]int{})
}

func calcMax(segment [][]int, index int, dp map[int]int) int {
	if index >= len(segment) {
		return 0
	}

	if val, ok := dp[index]; ok {
		return val
	}

	curVal := segment[index][2]
	nextEl := nextElement(segment, index)
	if nextEl != -1 {
		curVal += calcMax(segment, nextEl, dp)
	}
	nextVal := calcMax(segment, index+1, dp)

	dp[index] = Max(curVal, nextVal)

	return dp[index]
}

// ----
//   --
//   ----
//     ----
//   ---
func nextElement(segment [][]int, index int) int {
	left, right := index, len(segment)-1

	for left <= right {
		mid := left + (right-left)/2

		if segment[index][1] <= segment[mid][0] {
			if segment[mid-1][0] >= segment[index][1] {
				right = mid - 1
				continue
			}

			return mid
		}

		left = mid + 1
	}

	return -1
}

func Max(vars ...int) int {
	max := vars[0]
	for _, item := range vars {
		if max < item {
			max = item
		}
	}

	return max
}
