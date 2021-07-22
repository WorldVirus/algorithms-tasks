// https://leetcode.com/problems/find-peak-element/
package find_peak_elements

func findPeakElement(nums []int) int {
	start, end := 0, len(nums)-1

	for start < end {
		mid := start + ((end - start) / 2)

		if nums[mid] > nums[mid+1] {
			end = mid
			continue
		}

		start = mid + 1
	}

	return end
}
