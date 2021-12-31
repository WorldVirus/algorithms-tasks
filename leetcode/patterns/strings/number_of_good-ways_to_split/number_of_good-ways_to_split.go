// https://leetcode.com/problems/number-of-good-ways-to-split-a-string/
package number_of_good-ways_to_split
func numSplits(s string) int {
	var answer int
	if len(s) == 1 {
		return answer
	}

	freqAllEl := map[byte]int{}
	for i := 0; i < len(s); i += 1 {
		freqAllEl[s[i]] += 1
	}

	beginFregElemen := map[byte]int{}
	var uniqeCounter int

	for i := 0; i < len(s)-1; i += 1 {
		beginFregElemen[s[i]] += 1
		freqAllEl[s[i]] -= 1
		if freqAllEl[s[i]] == 0 {
			delete(freqAllEl, s[i])
		}
		var distinctBegin, notUniqe int
		for key := range beginFregElemen {
			if _, ok := freqAllEl[key]; !ok {
				distinctBegin += 1
				delete(beginFregElemen, key)
			} else {
				notUniqe += 1
			}
		}

		if len(freqAllEl)-notUniqe == distinctBegin+uniqeCounter {
			answer += 1
		}

		uniqeCounter += distinctBegin
	}

	return answer
}
