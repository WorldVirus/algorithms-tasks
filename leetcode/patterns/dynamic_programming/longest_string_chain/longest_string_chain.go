// https://leetcode.com/problems/longest-string-chain/
package longest_string_chain

func longestStrChain(words []string) int {
	dp := map[string]int{}
	wordsSet := map[string]bool{}
	max := 1

	for _, item := range words {
		wordsSet[item] = true
	}

	for i := 0; i < len(words); i += 1 {
		tempMax := search(words[i], wordsSet, dp)
		if max < tempMax {
			max = tempMax
		}
	}

	return max
}

func search(currWord string, wordsSet map[string]bool, dp map[string]int) int {
	if val, ok := dp[currWord]; ok {
		return val
	}
	max := 1
	str := currWord

	for i := 0; i < len(currWord); i += 1 {
		str = str[:i] + str[i+1:]
		if _, ok := wordsSet[str]; ok {
			tempMax := 1 + search(str, wordsSet, dp)
			if max < tempMax {
				max = tempMax
			}
		}

		str = str[:i] + string(currWord[i]) + str[i:]
	}

	dp[str] = max

	return max
}
