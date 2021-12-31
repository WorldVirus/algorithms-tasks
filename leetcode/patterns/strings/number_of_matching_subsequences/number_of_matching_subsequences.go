// https://leetcode.com/problems/number-of-matching-subsequences/
package number_of_matching_subsequences

func numMatchingSubseq(s string, words []string) int {
	var answer int
	waiting := map[rune][]string{' ': words}
	for _, c := range " " + s {
		advance := waiting[c]

		delete(waiting, c)
		for _, word := range advance {

			if len(word) == 0 {

				answer += 1
			} else {
				c := rune(word[0])

				waiting[c] = append(waiting[c], word[1:])
			}
		}
	}
	return answer
}
