// https://leetcode.com/problems/subsets-ii/
package subsets2

import (
	"sort"
	"strconv"
)

func subsetsWithDup(nums []int) [][]int {
	a := []int{}
	answer := [][]int{a}
	h := map[string]bool{}
	sort.Ints(nums)
	calcSubset(nums, a, &answer, 0, h)

	return answer
}

func calcSubset(nums []int, arr []int, answer *[][]int, index int, h map[string]bool) {
	if len(arr) > 0 {
		key := keyGenerate(arr)
		if _, ok := h[key]; !ok {
			a := append([]int{}, arr...)
			*answer = append(*answer, a)
			h[key] = true
		}
	}

	for i := index; i < len(nums); i += 1 {
		//if i > index && nums[i] == nums[i-1]{continue} instead hashmap
		arr = append(arr, nums[i])
		calcSubset(nums, arr, answer, i+1, h)
		arr = arr[:len(arr)-1]
	}
}

func keyGenerate(arr []int) string {
	var s string
	for _, item := range arr {
		s += strconv.Itoa(item)
	}

	return s
}
