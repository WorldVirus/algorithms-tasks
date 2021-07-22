// https://leetcode.com/problems/coin-change-2/
package coin_change_ii

func change(amount int, coins []int) int {
	dp := make([]int, amount+1)
	dp[0] = 1

	for _, item := range coins {
		for i := item; i < amount+1; i += 1 {
			dp[i] += dp[i-item]
		}
	}
	return dp[amount]
}
