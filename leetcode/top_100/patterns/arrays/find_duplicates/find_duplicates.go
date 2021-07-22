// https://leetcode.com/problems/find-the-duplicate-number/
package find_duplicates

func findDuplicate(nums []int) int {
	if len(nums) <= 2 {
		return nums[0]
	}

	for i := 0; i < len(nums); i += 1 {
		// [1,-3,-4,-2,-2],
		cur := nums[i]

		if cur < 0 {
			cur *= -1
		}

		if nums[cur] < 0 {
			return cur
		}

		nums[cur] *= -1
	}

	return -1
}
