// https://leetcode.com/problems/shortest-palindrome/
// KMP https://www.youtube.com/watch?v=c4akpqTwE5g

package shortest_palindrome

func shortestPalindrome(s string) string {
	if len(s) == 0 {
		return ""
	}

	var reversStr string

	for i := len(s) - 1; i >= 0; i -= 1 {
		reversStr += string(s[i])
	}

	tempStr := s + "#" + reversStr

	table := make([]int, len(tempStr))

	for i := 1; i < len(tempStr); i += 1 {
		j := table[i-1]

		for j > 0 && tempStr[i] != tempStr[j] {
			j = table[j-1]
		}

		if tempStr[i] == tempStr[j] {
			table[i] = j + 1
		}
	}

	return reversStr[0:len(s)-table[len(tempStr)-1]] + s

}
