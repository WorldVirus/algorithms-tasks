// https://leetcode.com/problems/longest-palindromic-subsequence/
package longest_palindromic_subsec

func longestPalindromeSubseq(s string) int {
	dp := make([][]int, len(s))
	for i := 0; i < len(s); i += 1 {
		dp[i] = make([]int, len(s))
	}

	for i := 0; i < len(s); i += 1 {
		dp[i][i] = 1
	}

	for i := 0; i < len(s); i += 1 {
		for j := i - 1; j >= 0; j -= 1 {
			if string(s[i]) == string(s[j]) {
				dp[i][j] = 2 + dp[i-1][j+1]
				continue
			}

			if dp[i][j+1] > dp[i-1][j] {
				dp[i][j] = dp[i][j+1]
			} else {
				dp[i][j] = dp[i-1][j]
			}
		}
	}

	return dp[len(s)-1][0]
}
