// https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
package longest_substring_with_k

func longestSubstring(s string, k int) int {
	var answer int
	for i := 0; i < len(s); i += 1 {
		freqChr := map[string]int{}
		delChr := map[string]bool{}

		for j := i; j < len(s); j += 1 {

			if _, ok := delChr[string(s[j])]; ok {

				if j-i+1 > answer && len(freqChr) == 0 {
					answer = j - i + 1
				}
				continue
			}

			freqChr[string(s[j])] += 1
			if val, ok := freqChr[string(s[j])]; ok && val == k {
				delChr[string(s[j])] = true
				delete(freqChr, string(s[j]))
			}

			if len(freqChr) == 0 && answer < j-i+1 {
				answer = j - i + 1
			}

		}

	}

	return answer
}
