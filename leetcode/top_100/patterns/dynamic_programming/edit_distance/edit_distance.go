// https://leetcode.com/problems/edit-distance/
// inspired by https://afteracademy.com/blog/edit-distance-problem
package edit_distance

func minDistance(word1 string, word2 string) int {
	size1, size2 := len(word1)+1, len(word2)+1
	dp := make([][]int, size1)
	for i := 0; i < size1; i += 1 {
		dp[i] = make([]int, size2)
	}

	for i := 0; i < size1; i += 1 {
		dp[i][0] = i
	}

	for i := 0; i < size2; i += 1 {
		dp[0][i] = i
	}

	for i := 1; i < size1; i += 1 {
		for j := 1; j < size2; j += 1 {
			if string(word1[i-1]) == string(word2[j-1]) {
				dp[i][j] = dp[i-1][j-1]
				continue
			}

			var cur int

			if dp[i-1][j-1] <= dp[i-1][j] && dp[i-1][j-1] <= dp[i][j-1] {
				cur = dp[i-1][j-1]
			} else if dp[i-1][j] <= dp[i-1][j-1] && dp[i-1][j] <= dp[i][j-1] {
				cur = dp[i-1][j]
			} else {
				cur = dp[i][j-1]
			}
			dp[i][j] = 1 + cur
		}
	}

	return dp[size1-1][size2-1]
}
