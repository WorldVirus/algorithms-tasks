// https://leetcode.com/problems/find-k-th-smallest-pair-distance/
package find_k_smallest_pair

import "sort"

func smallestDistancePair(nums []int, k int) int {
	sort.Ints(nums)
	start, end := 0, nums[len(nums)-1]-nums[0]

	for start < end {
		var counter int
		mid := start + (end-start)/2

		left, right := 0, 0
		for right < len(nums) {
			for nums[right]-nums[left] > mid {
				left += 1
			}

			counter += right - left
			right += 1
		}

		if counter >= k {
			end = mid

			continue
		}
		start = mid + 1

	}

	return start
}
