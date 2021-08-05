// https://leetcode.com/problems/interleaving-string/
// https://www.youtube.com/watch?v=3Rw3p9LrgvE
package interleaving_string

import "fmt"

func isInterleave(s1 string, s2 string, s3 string) bool {
	if len(s2)+len(s1) < len(s3) || len(s2)+len(s1) > len(s3) {
		return false
	}

	return scan(0, 0, s3, s2, s1, map[string]bool{})
}

func scan(i, j int, s3, s2, s1 string, dp map[string]bool) bool {
	if i == len(s1) && j == len(s2) {
		return true
	}

	k := fmt.Sprint(i) + fmt.Sprint(j)
	if val, ok := dp[k]; ok {
		return val
	}

	if i < len(s1) && s1[i] == s3[i+j] && scan(i+1, j, s3, s2, s1, dp) {
		return true
	}

	if j < len(s2) && s2[j] == s3[i+j] && scan(i, j+1, s3, s2, s1, dp) {
		return true
	}

	dp[k] = false

	return false
}
