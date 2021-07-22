// https://leetcode.com/problems/combination-sum-iii/ - not submited
package combination_iii

import "fmt"

func combinationSum3(k int, n int) [][]int {
	a := []int{}
	answer := [][]int{}
	calcComb(1, n, &answer, n, a, k)

	return answer
}

func calcComb(index int, cop_n int, answer *[][]int, n int, arr []int, k int) {
	if n < 0 || k < 0 {
		return
	}
	if n == 0 && k == 0 {
		fmt.Println(arr)
		a := append([]int{}, arr...)
		*answer = append(*answer, a)
		return
	}

	for i := index; i <= cop_n; i += 1 {
		arr = append(arr, i)
		calcComb(i+1, cop_n, answer, n-i, arr, k-1)
		arr = arr[:len(arr)-1]
	}

}
