// https://leetcode.com/problems/sentence-screen-fitting/
package sentence_screen_fitting

func wordsTyping(sentence []string, rows int, cols int) int {
	for _, word := range sentence {
		if len(word) > cols {
			return 0
		}
	}

	res := 0
	left := cols
	p := 0
	for i := 0; i < rows; {
		if len(sentence[p]) > left {
			i++
			left = cols
			continue
		}

		left = left - 1 - len(sentence[p])
		p++
		if p == len(sentence) {
			p = 0
			res++
		}
	}

	return res
}
