// https://leetcode.com/problems/find-original-array-from-doubled-array/
package find_original_array_from_doubled

import "sort"

func findOriginalArray(changed []int) []int {
	answer := []int{}
	if len(changed)%2 != 0 {
		return answer
	}

	sort.SliceStable(changed, func(a, b int) bool {
		return changed[a] < changed[b]
	})

	freqEls := map[int][]int{}

	for index, item := range changed {
		freqEls[item] = append(freqEls[item], index)
	}

	visitedEls := map[int]bool{}

	for index, item := range changed {
		if visitedEls[index] {
			continue
		}

		if _, ok := freqEls[item*2]; !ok {
			return []int{}
		}
		visitedEls[index] = true
		curAr := freqEls[item*2]
		visitedEls[curAr[len(curAr)-1]] = true
		freqEls[item*2] = freqEls[item*2][:len(freqEls[item*2])-1]

		if len(freqEls[item*2]) == 0 {
			delete(freqEls, item*2)
		}

		answer = append(answer, item)
	}

	if len(answer)*2 != len(changed) {
		return []int{}
	}

	return answer
}
