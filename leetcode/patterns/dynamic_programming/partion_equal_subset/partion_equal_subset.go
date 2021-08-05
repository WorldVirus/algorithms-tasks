// https://leetcode.com/problems/partition-equal-subset-sum/
package partion_equal_subset

func canPartition(nums []int) bool {
	if len(nums) < 2 {
		return false
	}

	var sum int

	for _, item := range nums {
		sum += item
	}

	if sum%2 != 0 {
		return false
	}

	sum /= 2
	dp := make([][]bool, len(nums)+1)
	for i := range nums {
		dp[i] = make([]bool, sum+1)
	}

	return calc(sum, 0, nums, &dp)
}

func calc(sum, index int, nums []int, dp *[][]bool) bool {
	if sum == 0 {
		return true
	}

	if sum < 0 || index == len(nums) {
		return false
	}

	if (*dp)[index][sum] {
		return (*dp)[index][sum]
	}

	res := calc(sum-nums[index], index+1, nums, dp) ||
		calc(sum, index+1, nums, dp)

	(*dp)[index][sum] = res

	return res
}
