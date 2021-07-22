//https://leetcode.com/problems/minimum-window-substring/
package minimum_window_substring

import "math"

func minWindow(s string, t string) string {
	var answer string
	if len(s) < len(t) {
		return answer
	}

	min := math.MaxInt32
	h := map[string]int{}

	for _, item := range t {
		cur := string(item)
		if _, ok := h[cur]; ok {
			h[cur] += 1
			continue
		}

		h[cur] = 1
	}

	for i := 0; i < len(s); i += 1 {
		if _, ok := h[string(s[i])]; ok {
			copH := map[string]int{}
			for k, v := range h {
				copH[k] = v
			}
			first, second := i, i
			for second < len(s) && len(copH) != 0 {
				curSecond := string(s[second])
				if _, ok := copH[curSecond]; ok {

					copH[curSecond] -= 1
					if val, _ := copH[curSecond]; val == 0 {
						delete(copH, curSecond)
					}
					second += 1
					continue
				}

				if _, ok := h[curSecond]; ok {
					break
				}
				second += 1
			}

			if len(copH) == 0 {
				if min > second-first {
					min = second - first
					answer = s[first:second]
				}
			}
		}
	}

	return answer
}
