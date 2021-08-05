// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
package k_smallest_element_in_sorted_matrix

func kthSmallest(matrix [][]int, k int) int {
	start, end := matrix[0][0], matrix[len(matrix)-1][len(matrix)-1]

	for start < end {
		mid := start + (end-start)/2
		if countVal(mid, matrix, k) < k {
			start = mid + 1
			continue
		}

		end = mid
	}

	return start
}

func countVal(curVal int, matrix [][]int, k int) int {
	var counter int

	for _, item := range matrix {
		start, end := 0, len(matrix)

		for start < end {
			mid := start + (end-start)/2
			if curVal >= item[mid] {
				start = mid + 1
			} else {
				end = mid
			}

		}

		counter += start
	}

	return counter
}
