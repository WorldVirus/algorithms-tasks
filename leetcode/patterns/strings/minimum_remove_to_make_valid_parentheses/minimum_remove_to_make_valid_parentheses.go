// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
package minimum_remove_to_make_valid_parentheses

func minRemoveToMakeValid(s string) string {
	closedAr := []int{}
	pairsAr := []int{}

	for i := 0; i < len(s); i += 1 {
		if string(s[i]) == ")" {
			if len(pairsAr) > 0 && string(s[pairsAr[len(pairsAr)-1]]) == "(" {
				pairsAr = pairsAr[:len(pairsAr)-1]
				continue
			}

			closedAr = append(closedAr, i)
		}

		if string(s[i]) == "(" {
			pairsAr = append(pairsAr, i)
		}
	}

	var answer string

	for i := 0; i < len(s); i += 1 {
		if string(s[i]) == ")" {
			if len(closedAr) > 0 && i == closedAr[0] {
				closedAr = closedAr[1:]
				continue
			}

		}

		if string(s[i]) == "(" {
			if len(pairsAr) > 0 && i == pairsAr[0] {
				pairsAr = pairsAr[1:]
				continue
			}
		}

		answer += string(s[i])
	}

	return answer
}
