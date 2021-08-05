// https://leetcode.com/problems/jump-game-iii/
package jump_game_iii

func canReach(arr []int, start int) bool {
	return search(arr, start, map[int]bool{})
}

func search(arr []int, start int, dp map[int]bool) bool {
	if start >= len(arr) || start < 0 {
		return false
	}

	if arr[start] == 0 {
		return true
	}
	var isValid bool
	if _, ok := dp[start]; !ok {
		dp[start] = true
		isValid = search(arr, start+arr[start], dp) || search(arr, start-arr[start], dp)
	}

	return isValid
}
