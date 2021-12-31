// https://leetcode.com/problems/decode-ways/
package decode_ways

import "fmt"

func numDecodings(s string) int {

	if string(s[0]) == "0" {
		return 0
	}

	checkH := map[string]bool{}
	index := 1
	for index < 27 {
		key := fmt.Sprint(index)
		checkH[key] = true
		index += 1
	}

	dp := make([]int, len(s)+1)
	dp[0] = 1
	dp[1] = 1

	for i := 2; i < len(dp); i += 1 {

		if string(s[i-1]) != "0" {
			dp[i] = dp[i-1]
		}

		if _, ok := checkH[string(s[i-2:i])]; ok {
			dp[i] += dp[i-2]
		}
	}

	return dp[len(s)]
}
