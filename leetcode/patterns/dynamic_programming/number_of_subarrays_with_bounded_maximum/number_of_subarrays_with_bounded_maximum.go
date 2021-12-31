// https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/
package number_of_subarrays_with_bounded_maximum

func numSubarrayBoundedMax(nums []int, left int, right int) int {
	prev, answer, dp := -1, 0, 0
	for i := 0; i < len(nums); i += 1 {
		if nums[i] >= left && nums[i] <= right {
			dp = i - prev
			answer += dp
		} else if nums[i] < left && i > 0 {
			answer += dp
		} else if nums[i] > right {
			prev = i
			dp = 0
		}
	}

	return answer
}
