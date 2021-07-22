// https://leetcode.com/problems/combination-sum-ii/
package combination_sum2

import (
	"fmt"
	"sort"
	"strconv"
)

func combinationSum2(candidates []int, target int) [][]int {
	answer := [][]int{}
	a := []int{}
	sort.Ints(candidates)
	fmt.Println(candidates)
	h := map[string]bool{}
	calc(a, &answer, candidates, 0, target, h)

	return answer
}

func calc(arr []int, answer *[][]int, cand []int, index int, target int, h map[string]bool) {
	if target < 0 {
		return
	}

	if target == 0 {
		key := generateKey(arr)
		if _, ok := h[key]; !ok {
			a := append([]int{}, arr...)
			*answer = append(*answer, a)
			h[key] = true
		}

		return
	}

	for i := index; i < len(cand); i += 1 {
		// cheet if we dont want to use hashmap
		// if i > index && cand[i] == cand[i-1] {
		// 	continue
		// }
		arr = append(arr, cand[i])
		calc(arr, answer, cand, i+1, target-cand[i], h)
		arr = arr[:len(arr)-1]
	}
}

func generateKey(arr []int) string {
	var sum string
	for _, item := range arr {
		s := strconv.Itoa(item)
		sum += s
	}

	return sum
}
