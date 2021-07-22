// https://leetcode.com/problems/remove-duplicate-letters/
package remove_duplicate_letters

func removeDuplicateLetters(s string) string {
	h := map[string]int{}

	for i, item := range s {
		h[string(item)] = i
	}

	oc := map[string]bool{}
	stack := []string{}

	for i := 0; i < len(s); i += 1 {
		if _, ok := oc[string(s[i])]; ok {
			continue
		}

		for len(stack) > 0 && stack[len(stack)-1] > string(s[i]) && h[stack[len(stack)-1]] > i {
			delete(oc, stack[len(stack)-1])
			stack = stack[:len(stack)-1]

		}

		stack = append(stack, string(s[i]))
		oc[string(s[i])] = true

	}

	var answer string

	for _, item := range stack {
		answer += item
	}

	return answer
}
