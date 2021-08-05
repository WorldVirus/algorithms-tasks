// https://leetcode.com/problems/jump-game-ii/
package jump_game_ii

import "math"

func jump(nums []int) int {
	if len(nums) == 1 {
		return 0
	}
	return calcMinSteps(0, nums, map[int]int{})
}

func calcMinSteps(index int, nums []int, dp map[int]int) int {
	if index >= len(nums) {
		return math.MaxInt32
	}

	if index == len(nums)-1 {
		return 0
	}

	if val, ok := dp[index]; ok {
		return val
	}

	minSteps := math.MaxInt32

	for i := index + 1; i <= nums[index]+index; i += 1 {

		tempMin := 1 + calcMinSteps(i, nums, dp)

		if tempMin < minSteps {
			minSteps = tempMin
		}
	}

	dp[index] = minSteps

	return minSteps
}
