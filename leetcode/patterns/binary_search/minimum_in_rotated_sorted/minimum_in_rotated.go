// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array
package minimum_in_rotated_sorted

func findMin(nums []int) int {
	start, end := 0, len(nums)-1

	if nums[end] > nums[start] || len(nums) == 1 {
		return nums[start]
	}

	for start <= end {
		mid := start + ((end - start) / 2)

		if mid+1 < len(nums) && nums[mid] > nums[mid+1] {
			return nums[mid+1]
		}

		if mid-1 >= 0 && nums[mid-1] > nums[mid] {
			return nums[mid]
		}

		if nums[mid] < nums[start] && nums[end] > nums[mid] {
			end = mid - 1
			continue
		}

		if nums[mid] > nums[start] && nums[mid] > nums[end] {
			start = mid + 1
		}
	}

	return nums[end]
}
