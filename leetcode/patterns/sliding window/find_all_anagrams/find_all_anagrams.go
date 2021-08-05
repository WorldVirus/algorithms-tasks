// https://leetcode.com/problems/find-all-anagrams-in-a-string/
package find_all_anagrams

func findAnagrams(x string, y string) []int {
	answer := []int{}
	if len(y) > len(x) {
		return answer
	}

	frequencyCharacters := map[string]int{}

	for _, item := range y {
		frequencyCharacters[string(item)] += 1
	}

	temporH := map[string]int{}

	for i := 0; i < len(y); i += 1 {
		temporH[string(x[i])] += 1
	}

	start, end := 0, len(y)-1
	for end < len(x) {
		isCorrectIndex := true
		for key := range frequencyCharacters {
			if frequencyCharacters[key] != temporH[key] {
				isCorrectIndex = false
				break
			}
		}

		if isCorrectIndex {
			answer = append(answer, start)
		}

		temporH[string(x[start])] -= 1
		if temporH[string(x[start])] == 0 {
			delete(temporH, string(x[start]))
		}
		start += 1
		end += 1

		if end < len(x) {
			temporH[string(x[end])] += 1
		}
	}

	return answer

}
