// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

package search_for_range

func searchRange(nums []int, target int) []int {
	fake := []int{-1, -1}
	if len(nums) == 0 {
		return fake
	}
	start, end := 0, len(nums)-1
	// if nums[start] == nums[end] && nums[start] == target {
	//     return {start, end}
	// }

	if nums[start] == nums[end] && nums[start] != target {
		return fake
	}

	startPos := findStart(target, nums)
	endPos := findEnd(target, nums)

	answer := []int{startPos, endPos}
	return answer
}

func findStart(target int, nums []int) int {
	start, end := 0, len(nums)-1
	pos := -1
	for start <= end {
		mid := start + ((end - start) / 2)

		if nums[mid] == target {
			pos = mid
		}

		if nums[mid] >= target {
			end = mid - 1
			continue
		}

		start = mid + 1
	}

	return pos
}

func findEnd(target int, nums []int) int {
	start, end := 0, len(nums)-1
	pos := -1
	for start <= end {
		mid := start + ((end - start) / 2)
		if nums[mid] == target {
			pos = mid
		}
		if nums[mid] <= target {
			start = mid + 1
			continue
		}

		end = mid - 1
	}

	return pos
}
