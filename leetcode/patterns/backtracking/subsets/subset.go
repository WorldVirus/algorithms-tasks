// https://leetcode.com/problems/subsets/
package subsets

func subsets(nums []int) [][]int {
	a := []int{}
	answer := [][]int{a}
	calcSubset(nums, a, &answer, 0)

	return answer
}

func calcSubset(nums []int, arr []int, answer *[][]int, index int) {
	if len(arr) > 0 {
		a := append([]int{}, arr...)
		*answer = append(*answer, a)
	}
	for i := index; i < len(nums); i += 1 {
		arr = append(arr, nums[i])
		calcSubset(nums, arr, answer, i+1)
		arr = arr[:len(arr)-1]
	}
}
