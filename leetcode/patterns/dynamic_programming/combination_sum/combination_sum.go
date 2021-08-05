// https://leetcode.com/problems/combination-sum-iv/solution/
package combination_sum

// top-down
func combinationSum4(nums []int, target int) int {
	dp := make([]int, target+1)
	for i := 0; i <= target; i += 1 {
		dp[i] = -1
	}

	return calc(nums, &dp, target)
}

func calc(nums []int, dp *[]int, target int) int {
	if (*dp)[target] != -1 {
		return (*dp)[target]
	}

	if target == 0 {
		return 1
	}

	res := 0
	for i := 0; i < len(nums); i += 1 {
		if nums[i] <= target {
			res += calc(nums, dp, target-nums[i])
		}
	}

	(*dp)[target] = res

	return res
}

// bottom-up
func combinationSum(nums []int, target int) int {
	dp := make([]int, target+1)
	dp[0] = 1

	for combSum := 1; combSum < target+1; combSum += 1 {
		for _, num := range nums {
			if combSum-num >= 0 {
				dp[combSum] += dp[combSum-num]
			}
		}
	}

	return dp[target]
}
