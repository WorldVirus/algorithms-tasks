// https://leetcode.com/problems/make-sum-divisible-by-p/
// NOT SUBMITED
// INSPIRED BY: https://leetcode.com/problems/make-sum-divisible-by-p/discuss/859173/DETAILED-EXPLANATION-OF-MATH-BEHIND-O(N)-SOLUTION
func minSubarray(nums []int, p int) int {
	var sum int
	for i := 0; i < len(nums); i += 1 {
		sum += nums[i]
	}
	sum %= p
	if sum == 0 {
		return 0
	}

	h := map[int]int{0: -1}
	answer := len(nums)
	var prefSum int
	for i := 0; i < len(nums); i += 1 {
		prefSum += nums[i]
		key := (prefSum%p - sum) % p

		if val, ok := h[key]; ok {
			if answer > i-val {
				answer = i - val
			}
		}

		h[prefSum%p] = i
	}

	if answer == len(nums) {
		return -1
	}

	return answer
}
