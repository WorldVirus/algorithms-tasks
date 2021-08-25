// https://leetcode.com/problems/word-ladder/
package word_ladder

func ladderLength(beginWord string, endWord string, wordList []string) int {
	h := map[string]int{}

	for _, item := range wordList {
		h[item] += 1
	}

	if _, ok := h[endWord]; !ok {
		return 0
	}

	queue := []string{beginWord}
	var answer int
	for len(queue) > 0 {
		answer += 1
		curSize := len(queue)
		var index int
		for index < curSize {
			curWord := queue[0]
			queue = queue[1:]
			for j := 0; j < len(curWord); j += 1 {
				for ch := 'a'; ch <= 'z'; ch += 1 {
					tempWord := curWord[:j] + string(ch) + curWord[j+1:]

					if tempWord == endWord {
						return answer + 1
					}

					if _, ok := h[tempWord]; !ok {
						continue
					}

					delete(h, tempWord)
					queue = append(queue, tempWord)
				}
			}
			index += 1
		}
	}

	return 0
}
