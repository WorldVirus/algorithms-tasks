// https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
// Desc: https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/discuss/935935/Java-Detailed-Explanation-O(N)-Prefix-SumMap-Longest-Target-Sub-Array/819655
package minimum_operations_to_reduce_x_to_zero

func minOperations(nums []int, x int) int {
	target := -x
	for _, item := range nums {
		target += item
	}

	if target == 0 {
		return len(nums)
	}

	var sum int
	h := map[int]int{}
	h[0] = -1
	answer := -1
	for i := 0; i < len(nums); i += 1 {
		sum += nums[i]
		if val, ok := h[sum-target]; ok {
			if answer < i-val {
				answer = i - val
			}
		}

		h[sum] = i
	}

	if answer > -1 {
		return len(nums) - answer
	}

	return answer
}
