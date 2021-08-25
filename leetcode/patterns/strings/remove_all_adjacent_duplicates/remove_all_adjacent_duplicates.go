// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
package remove_all_adjacent_duplicates

func removeDuplicates(s string) string {
	stack := []string{}

	for i := 0; i < len(s); i += 1 {
		if len(stack) > 0 && string(stack[len(stack)-1]) == string(s[i]) {
			stack = stack[:len(stack)-1]
			continue
		}

		stack = append(stack, string(s[i]))
	}

	var answer string

	for _, item := range stack {
		answer += string(item)
	}

	return answer
}
