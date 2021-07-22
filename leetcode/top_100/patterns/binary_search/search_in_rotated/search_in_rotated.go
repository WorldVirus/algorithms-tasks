// https://leetcode.com/problems/search-in-rotated-sorted-array/
package search_in_rotated

func search(nums []int, target int) int {
	start, end := 0, len(nums)-1
	// [4,5,6,7,0,1,2], 0
	for start <= end {
		mid := start + ((end - start) / 2) // start = 4, end= 6,  mid= 3, nums[mid] = 1

		if nums[mid] == target {
			return mid
		}
		if nums[mid] >= nums[start] {
			if nums[mid] > target && nums[start] <= target {
				end = mid - 1
				continue
			}
			// if nums[mid] > target && nums[start] > target {
			start = mid + 1
			//
			continue
			// }
		}
		if nums[mid] < target && nums[end] >= target {
			start = mid + 1
		} else {
			end = mid - 1
		}

	}

	return -1
}
