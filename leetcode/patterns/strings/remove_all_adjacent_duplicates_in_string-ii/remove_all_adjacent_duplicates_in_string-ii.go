// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
package remove_all_adjacent_duplicates_in_string-ii

func removeDuplicates(s string, k int) string {
	stack := []string{}

	for i := 0; i < len(s); i += 1 {
		counter := 1

		for i < len(s)-1 {
			if string(s[i]) == string(s[i+1]) {
				counter += 1
				i += 1
				continue
			}

			break
		}

		counter %= k
		if counter != 0 {
			strCounter := fmt.Sprint(counter)

			if len(stack) > 0 && string(stack[len(stack)-2]) == string(s[i]) {
				curCount, _ := strconv.Atoi(stack[len(stack)-1])
				curNumb := (counter + curCount) % k
				if curNumb == 0 {
					stack = stack[:len(stack)-2]
				} else {
					stack[len(stack)-1] = fmt.Sprint(curNumb)
				}
			} else {
				stack = append(stack, string(s[i]), strCounter)

			}
		}

	}

	var answer string

	for i := 0; i < len(stack); i += 2 {
		tempCounter, _ := strconv.Atoi(stack[i+1])

		for tempCounter > 0 {
			answer += string(stack[i])
			tempCounter -= 1
		}
	}

	return answer

}