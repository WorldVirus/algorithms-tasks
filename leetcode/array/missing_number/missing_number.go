package missing_number

// https://leetcode.com/problems/missing-number/
func missingNumber(nums []int) int {
	size := len(nums)
	flagN := true
	flagZ := true
	marked := false
	for i := range nums {
		cur := nums[i] // 1
		if cur < 0 {
			cur *= -1
		}

		if cur == size {
			flagN = false
			continue
		}

		if cur == 0 {
			flagZ = false
		}

		if nums[cur] == 0 {
			marked = true
		}

		nums[cur] *= (-1)
	}

	if flagN {
		return size
	}

	if flagZ {
		return 0
	}

	for i, item := range nums {
		if item > 0 || (!marked && item == 0) {
			return i
		}
	}

	return 0
}
