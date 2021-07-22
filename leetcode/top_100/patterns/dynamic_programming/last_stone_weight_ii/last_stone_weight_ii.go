// https://leetcode.com/problems/last-stone-weight-ii/

package last_stone_weight_ii

import (
	"fmt"
	"math"
)

func lastStoneWeightII(stones []int) int {
	dp := map[string]int{}

	return calc(dp, stones, 0, 0, len(stones))
}

func calc(dp map[string]int, stones []int, sum int, index, size int) int {
	if index >= size {
		if sum < 0 {
			return sum * (-1)
		}

		return sum
	}
	key := fmt.Sprint(index) + fmt.Sprint(sum)
	if _, ok := dp[key]; ok {
		return dp[key]
	}

	ans := math.MaxInt32
	cur_m := calc(dp, stones, sum-stones[index], index+1, size)
	if cur_m < ans {
		ans = cur_m
	}
	cur_p := calc(dp, stones, sum+stones[index], index+1, size)
	if cur_p < ans {
		ans = cur_p
	}

	dp[key] = ans

	return ans
}
