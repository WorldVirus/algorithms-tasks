// https://leetcode.com/problems/interval-list-intersections/
// https://leetcode.com/problems/interval-list-intersections/discuss/647482/Python-Two-Pointer-Approach-%2B-Thinking-Process-Diagrams
package interval_intersection

func intervalIntersection(firstList [][]int, secondList [][]int) [][]int {
	answer := [][]int{}

	if len(firstList) == 0 || len(secondList) == 0 {
		return answer
	}

	var j, i int

	for i < len(firstList) && j < len(secondList) {
		arrfirst := firstList[i]
		arrSecond := secondList[j]

		if arrfirst[0] <= arrSecond[1] && arrSecond[0] <= arrfirst[1] {
			maxStart, minEnd := minMaxDetect(arrfirst, arrSecond)
			answer = append(answer, []int{maxStart, minEnd})
		}

		if arrfirst[1] <= arrSecond[1] {
			i += 1
		} else {
			j += 1
		}
	}

	return answer
}

func minMaxDetect(arrF, arrS []int) (int, int) {
	var max, min int

	if arrF[0] < arrS[0] {
		max = arrS[0]
	} else {
		max = arrF[0]
	}

	if arrF[1] > arrS[1] {
		min = arrS[1]
	} else {
		min = arrF[1]
	}

	return max, min
}
