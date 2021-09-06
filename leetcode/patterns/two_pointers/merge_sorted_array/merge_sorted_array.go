// https://leetcode.com/problems/merge-sorted-array/
package merge_sorted_array

func merge(nums1 []int, m int, nums2 []int, n int) {
	copNums := []int{}

	for i := range nums1 {
		copNums = append(copNums, nums1[i])
	}

	first, second, index := 0, 0, 0

	for first < m && second < n {
		if copNums[first] >= nums2[second] {
			nums1[index] = nums2[second]
			second += 1
			index += 1
			continue
		}

		nums1[index] = copNums[first]
		index += 1
		first += 1
	}

	for first < m {
		nums1[index] = copNums[first]
		index += 1
		first += 1
	}

	for second < n {
		nums1[index] = nums2[second]
		index += 1
		second += 1
	}
}
