// https://leetcode.com/problems/longest-repeating-character-replacement/ (not submited - inspired by https://leetcode.com/problems/longest-repeating-character-replacement/discuss/91271/Java-12-lines-O(n)-sliding-window-solution-with-explanation)
package longest_repeating_character_replacement

func characterReplacement(s string, k int) int {
	var max, start, maxCount int
	frequency := make([]int, 26)
	c := "A"

	for end := 0; end < len(s); end += 1 {
		curIndex := s[end] - c[0]
		frequency[curIndex] += 1

		if maxCount < frequency[curIndex] {
			maxCount = frequency[curIndex]
		}

		for end-start+1-maxCount > k {
			start += 1
			frequency[s[start]-c[0]] -= 1
		}

		if max < end-start+1 {
			max = end - start + 1
		}
	}

	return max
}
