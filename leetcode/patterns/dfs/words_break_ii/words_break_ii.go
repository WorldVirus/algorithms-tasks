// https://leetcode.com/problems/word-break-ii/
// https://leetcode.com/problems/word-break-ii/discuss/44167/My-concise-JAVA-solution-based-on-memorized-DFS/215095
// These are all good approaches when not all combinations are valid, but won't change the time complexity O(2^n) in the worse case scenario where all combinations of the string are correct (e,g, s=aaa, dic=[a, aa, aaa]).
// Some might argue that they reduce the number of recursive/iterative calls to n^2 using memo or DP just like word break I.
// However, the time complexity of each recursive call in this approach is not linear anymore. Imagine the length of sublist is 2^(n-1).
// Optimization only happens when the return value is a integer or boolean. This is why we don't use DP/memo to solve subsets/permutation problem because all combinations are valid. The code below combines (1) and (4) and beats 99% as the solution above suffers the problem that the dictionary size might be too large. Hope it helps.
package words_break_ii

func wordBreak(s string, wordDict []string) []string {
	return dfs(s, wordDict, map[string][]string{})
}

func dfs(s string, wordDict []string, cache map[string][]string) []string {
	if res, ok := cache[s]; ok {
		return res
	}
	if len(s) == 0 {
		return []string{""}
	}

	var res []string
	for _, w := range wordDict {
		if len(w) <= len(s) && w == s[:len(w)] {
			for _, str := range dfs(s[len(w):], wordDict, cache) {
				if len(str) == 0 {
					res = append(res, w)
				} else {
					res = append(res, w+" "+str)
				}
			}
		}
	}
	cache[s] = res
	return res
}
