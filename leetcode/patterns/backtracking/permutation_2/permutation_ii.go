// https://leetcode.com/problems/permutations-ii/
package permutation_2

import "strconv"

func permuteUnique(nums []int) [][]int {
	a := []int{}
	i := []int{}
	answer := [][]int{}
	h := map[string]bool{}
	calc(nums, a, i, &answer, h)

	return answer
}

func calc(nums []int, arr []int, index_arr []int, answer *[][]int, h map[string]bool) {
	if len(arr) == len(nums) {
		cur := calcKey(arr)
		if _, ok := h[cur]; !ok {
			a := append([]int{}, arr...)
			*answer = append(*answer, a)
			h[cur] = true
		}
	} else {
		for i, item := range nums {
			if !isAdded(index_arr, i) {
				// used[i] || i > 0 && nums[i] == nums[i-1] && !used[i-1] continue ; instead of using hashmap
				arr = append(arr, item)
				index_arr = append(index_arr, i)
				calc(nums, arr, index_arr, answer, h)
				arr = arr[:len(arr)-1]
				index_arr = index_arr[:len(index_arr)-1]

			}
		}
	}
}

func isAdded(arr []int, index int) bool {
	for _, item := range arr {
		if item == index {
			return true
		}
	}

	return false
}

func calcKey(arr []int) string {
	var s string
	for _, item := range arr {
		s += strconv.Itoa(item)
	}

	return s
}
