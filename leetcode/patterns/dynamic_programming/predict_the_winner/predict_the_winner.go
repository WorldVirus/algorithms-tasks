func PredictTheWinner(nums []int) bool {
	return searchWinner(0, len(nums)-1, nums, map[string]int{}) >= 0
}

func searchWinner(start, end int, arr []int, dp map[string]int) int {
	if start == end {
		return arr[start]
	}

	key := fmt.Sprint(start) + fmt.Sprint(end)
	if val, ok := dp[key]; ok {
		return val
	}

	chooseS := arr[start] - searchWinner(start+1, end, arr, dp)
	chooseE := arr[end] - searchWinner(start, end-1, arr, dp)

	if chooseS > chooseE {
		dp[key] = chooseS
	} else {
		dp[key] = chooseE
	}

	return dp[key]
}
