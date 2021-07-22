// https://leetcode.com/problems/top-k-frequent-words/
package top_k_frequent

import "sort"

func topKFrequent(words []string, k int) []string {
	h := map[string]int{}
	var max int

	for _, item := range words {
		if _, ok := h[item]; !ok {
			h[item] = 0
		}
		h[item] += 1

		if max < h[item] {
			max = h[item]
		}
	}

	arr := make([][]string, max+1)

	for k, v := range h {
		arr[v] = append(arr[v], k)

		delete(h, k)
	}

	answer := []string{}

	for i := len(arr) - 1; i >= 0; i -= 1 {
		curAr := arr[i]
		sort.Strings(curAr)
		index := 0
		for index < len(curAr) && k > 0 {
			answer = append(answer, curAr[index])
			k -= 1
			index += 1
		}

		if k == 0 {
			break
		}
	}

	return answer
}
