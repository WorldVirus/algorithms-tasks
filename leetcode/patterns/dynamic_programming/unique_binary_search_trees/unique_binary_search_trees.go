// https://leetcode.com/problems/unique-binary-search-trees/
// https://www.youtube.com/watch?v=Ox0TenN3Zpg
package unique_binary_search_trees

func numTrees(n int) int {
	dp := make([]int, n+1)

	for i := 0; i < n+1; i += 1 {
		dp[i] = 1
	}

	for i := 2; i < n+1; i += 1 {
		var curVal int
		for j := 1; j < i+1; j += 1 {
			left := dp[j-1]
			right := dp[i-j]

			curVal += left * right
		}

		dp[i] = curVal
	}

	return dp[n]
}
