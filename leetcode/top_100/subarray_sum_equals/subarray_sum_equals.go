// https://leetcode.com/problems/subarray-sum-equals-k/
package subarray_sum_equals

func subarraySum(nums []int, k int) int {
	var answer int
	var sum int

	freqH := map[int]int{0: 1}

	for i := 0; i < len(nums); i += 1 {
		sum += nums[i]
		if val, ok := freqH[sum-k]; ok {
			answer += val
		}

		freqH[sum] += 1
	}

	return answer
}
