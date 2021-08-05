// https://leetcode.com/problems/permutations/
package permutations

func permute(nums []int) [][]int {
	a := []int{}
	answer := [][]int{}
	calc(nums, &answer, a)

	return answer
}

func calc(nums []int, answer *[][]int, arr []int) {
	if len(arr) == len(nums) {
		a := append([]int{}, arr...)
		*answer = append(*answer, a)
	} else {
		for _, item := range nums {
			if containts(arr, item) {
				continue
			}
			arr = append(arr, item)
			calc(nums, answer, arr)
			arr = arr[:len(arr)-1]
		}
	}
}

func containts(arr []int, el int) bool {
	for _, item := range arr {
		if item == el {
			return true
		}
	}

	return false
}
