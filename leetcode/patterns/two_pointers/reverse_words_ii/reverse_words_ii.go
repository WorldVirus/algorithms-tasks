// https://leetcode.com/problems/reverse-words-in-a-string-ii/
package reverse_words_ii

func reverseWords(s []byte) {
	reverse(0, len(s)-1, &s)
	var index int
	for i := 0; i < len(s); i += 1 {
		if string(s[i]) == " " {
			reverse(index, i-1, &s)
			index = i + 1
		}
	}
	reverse(index, len(s)-1, &s)
}

func reverse(start, end int, s *[]byte) {
	for start < end {
		(*s)[start], (*s)[end] = (*s)[end], (*s)[start]
		start += 1
		end -= 1
	}
}
