// https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/
package shortest_subarray_with_sum_at_least

import "math"

func shortestSubarray(nums []int, k int) int {
	min := math.MaxInt32
	size := len(nums) + 1
	prefixSum := make([]int, size)

	for i := 1; i < size; i += 1 {
		prefixSum[i] = prefixSum[i-1] + nums[i-1]
	}

	deqIndexes := make([]int, len(nums)+1)
	deqIndexes = append(deqIndexes, 0)

	for i := 1; i < size; i += 1 {
		for len(deqIndexes) > 0 && prefixSum[i]-prefixSum[deqIndexes[0]] >= k {
			firstPos := deqIndexes[0]
			deqIndexes = deqIndexes[1:]

			if i-firstPos < min {
				min = i - firstPos
			}
		}

		for len(deqIndexes) > 0 && prefixSum[deqIndexes[len(deqIndexes)-1]] >= prefixSum[i] {
			deqIndexes = deqIndexes[:len(deqIndexes)-1]
		}

		deqIndexes = append(deqIndexes, i)
	}

	if min == math.MaxInt32 {
		return -1
	}

	return min
}
