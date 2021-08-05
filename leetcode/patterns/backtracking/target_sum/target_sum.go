//https://leetcode.com/problems/target-sum/
// can use dfs, dp
package target_sum

func findTargetSumWays(nums []int, target int) int {
	var answer int
	calcSum(nums, target, 0, &answer, 0, 0)

	return answer
}

func calcSum(nums []int, target int, cur_sum int, answer *int, index int, usedI int) {
	if len(nums) == usedI {
		if target == cur_sum {
			*answer += 1
		}

		return
	}

	calcSum(nums, target, cur_sum-nums[index], answer, index+1, usedI+1)
	calcSum(nums, target, cur_sum+nums[index], answer, index+1, usedI+1)
}
