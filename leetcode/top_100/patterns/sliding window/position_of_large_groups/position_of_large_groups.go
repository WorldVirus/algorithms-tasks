// https://leetcode.com/problems/positions-of-large-groups/
package position_of_large_groups

func largeGroupPositions(s string) [][]int {
	answer := [][]int{}
	start, end := 0, 0
	for start < len(s)-1 {
		var counter int

		for end < len(s) && string(s[start]) == string(s[end]) {
			counter += 1
			if counter == 3 {
				arr := []int{start, 0}
				answer = append(answer, arr)
			}

			end += 1
		}

		if counter >= 3 {
			answer[len(answer)-1][1] = end - 1
		}

		start = end
	}

	return answer
}
