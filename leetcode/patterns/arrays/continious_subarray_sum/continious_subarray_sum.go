// https://leetcode.com/problems/continuous-subarray-sum/
package continious_subarray_sum

func checkSubarraySum(nums []int, k int) bool {
	h := map[int]int{}
	h[0] = -1
	var sum int

	for i := 0; i < len(nums); i += 1 {
		sum += nums[i]
		sum %= k

		if val, ok := h[sum]; ok {
			if i-val > 1 {
				return true
			}

			continue
		}

		h[sum] = i
	}

	return false
}
