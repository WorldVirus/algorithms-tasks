// https://leetcode.com/problems/remove-k-digits/
package remove_k_digits

import "strconv"

func removeKdigits(num string, k int) string {
	stack := []int{}
	for i := 0; i < len(num); i += 1 {
		curVal, _ := strconv.Atoi(string(num[i]))
		for len(stack) > 0 && k > 0 {
			curStackVal, _ := strconv.Atoi(string(num[stack[len(stack)-1]]))
			if curVal < curStackVal {
				stack = stack[:len(stack)-1]
				k -= 1
				continue
			}

			break
		}

		stack = append(stack, i)
	}

	for k > 0 {
		stack = stack[:len(stack)-1]
		k -= 1
	}
	var answer string
	for i := 0; i < len(stack); i += 1 {
		if len(answer) == 0 && string(num[stack[i]]) == "0" {
			continue
		}

		answer += string(num[stack[i]])
	}

	if len(answer) == 0 {
		return "0"
	}

	return answer
}
