// https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/
package minimum_diff_beetween_largest

import "sort"

func minDifference(nums []int) int {
	sort.Ints(nums)
	return calcShifts(nums, 0, len(nums)-1, 0)
}

func calcShifts(arr []int, left, right, tempCounter int) int {
	if left > right {
		return 0
	}
	if tempCounter == 3 {
		return arr[right] - arr[left]
	}

	min_f := calcShifts(arr, left+1, right, tempCounter+1)
	min_s := calcShifts(arr, left, right-1, tempCounter+1)

	if min_f < min_s {
		return min_f
	}

	return min_s
}
