// https://leetcode.com/problems/different-ways-to-add-parentheses/
// https://leetcode.com/problems/different-ways-to-add-parentheses/discuss/1294189/C%2B%2B-Solution-Faster-than-100-or-Explained-with-diagrams
// with memmo https://leetcode.com/problems/different-ways-to-add-parentheses/discuss/866096/Python%3A-Divde-and-Conquer-%2B-Memoization-%2B-O(N-*-2N)
package different_ways_to_add_parentheses

import (
	"strconv"
	"unicode"
)

func diffWaysToCompute(expression string) []int {
	answer := []int{}
	isDigitFlag := true
	for i := 0; i < len(expression); i += 1 {

		if !unicode.IsNumber(rune(expression[i])) {
			isDigitFlag = false
			leftArr := diffWaysToCompute(expression[:i])
			rightArr := diffWaysToCompute(expression[i+1:])

			for j := 0; j < len(leftArr); j += 1 {
				for k := 0; k < len(rightArr); k += 1 {
					answer = append(answer, calc(leftArr[j], rightArr[k], string(expression[i])))

				}
			}
		}
	}

	if isDigitFlag {
		val, _ := strconv.Atoi(expression)

		return []int{val}
	}

	return answer
}

func calc(val_a, val_b int, op string) int {
	if op == "+" {
		return val_a + val_b
	}
	if op == "-" {
		return val_a - val_b
	}
	if op == "*" {
		return val_a * val_b
	}

	return 0
}
