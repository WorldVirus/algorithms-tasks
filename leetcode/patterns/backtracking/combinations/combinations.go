// https://leetcode.com/problems/combinations/

package combinations

func combine(n int, k int) [][]int {
	a := []int{}
	answer := [][]int{}

	calcComb(&answer, a, 1, n, k)

	return answer
}

func calcComb(answer *[][]int, arr []int, index int, n int, k int) {
	if len(arr) == k {
		a := append([]int{}, arr...)
		*answer = append(*answer, a)
	} else {
		for i := index; i <= n; i += 1 {
			arr = append(arr, i)
			calcComb(answer, arr, i+1, n, k)
			arr = arr[:len(arr)-1]
		}
	}
}
