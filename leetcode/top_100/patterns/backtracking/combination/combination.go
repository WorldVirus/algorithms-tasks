//https://leetcode.com/problems/combination-sum/
package combination

func combinationSum(candidates []int, target int) [][]int {
	a := []int{}
	answer := [][]int{}
	calcComb(0, &answer, candidates, a, target)

	return answer
}
func calcComb(index int, answer *[][]int, cand []int, arr []int, target int) {
	if target < 0 {
		return
	}
	if target == 0 {
		a := append([]int{}, arr...)
		*answer = append(*answer, a)
		return
	}
	for i := index; i < len(cand); i += 1 {
		arr = append(arr, cand[i])
		calcComb(i, answer, cand, arr, target-cand[i])
		arr = arr[:len(arr)-1]
	}

}
