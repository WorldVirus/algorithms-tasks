// https://leetcode.com/problems/flip-game-ii/
package flip_game_ii

func canWin(currentState string) bool {
	if len(currentState) == 1 {
		return false
	}

	return isFirstWinner(currentState, map[string]bool{})
}

func isFirstWinner(str string, dp map[string]bool) bool {
	if val, ok := dp[str]; ok {
		return val
	}

	for i := 0; i < len(str)-1; i += 1 {
		if string(str[i]) == "+" && string(str[i+1]) == "+" {
			tempStr := str[:i] + "--" + str[i+2:]

			if !isFirstWinner(tempStr, dp) {
				dp[str] = true

				return dp[str]
			}

		}
	}

	return false
}
