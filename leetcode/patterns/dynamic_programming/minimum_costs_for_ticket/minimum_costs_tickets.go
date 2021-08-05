// https://leetcode.com/problems/minimum-cost-for-tickets/
package minimum_costs_for_ticket

import "math"

func mincostTickets(days []int, costs []int) int {
	dp := make([]int, len(days)+1)

	for i := range dp {
		dp[i] = -1
	}
	h := map[int]int{}
	h[0], h[1], h[2] = 1, 7, 30
	return calc(&dp, 0, days, costs, h)
}

func calc(dp *[]int, index int, days []int, costs []int, h map[int]int) int {
	if index >= len(days) {
		return 0
	}

	if (*dp)[index] != -1 {
		return (*dp)[index]
	}

	res := math.MaxInt32

	i := index
	for j := 0; j < len(costs); j += 1 {
		for index < len(days) && h[j]+days[i] > days[index] {
			index += 1
		}

		cur := calc(dp, index, days, costs, h) + costs[j]
		if cur < res {
			res = cur
		}
	}

	(*dp)[i] = res

	return res
}
