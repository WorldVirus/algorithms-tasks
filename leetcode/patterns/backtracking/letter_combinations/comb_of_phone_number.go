// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// not submited but looks correct - the best solution is using bfs instead recursive solution
package letter_combinations

var hashmap = map[string][]string{
	"2": {"a", "b", "c"},
	"3": {"d", "e", "f"},
	"4": {"g", "h", "i"},
	"5": {"j", "k", "l"},
	"6": {"m", "n", "o"},
	"7": {"p", "q", "r", "s"},
	"8": {"t", "u", "v"},
	"9": {"w", "x", "y", "z"},
}

var Answer = []string{}

func Calc(curSubstring string, digits string, index int) {
	if len(curSubstring) == len(digits) {
		Answer = append(Answer, curSubstring)
		return
	}

	for j := index; j < len(digits); j += 1 {
		curAr := hashmap[string(digits[j])]

		for i := range curAr {
			curSubstring += curAr[i]
			Calc(curSubstring, digits, j+1)
			curSubstring = curSubstring[:len(curSubstring)-1]
		}
	}
}
func letterCombinations(digits string) []string {
	size := len(digits)
	if size == 0 {
		return []string{}
	}

	if string(digits[0]) == "2" && len(digits) == 1 {
		return hashmap[string(digits[0])]
	}

	Calc("", digits, 0)

	return Answer
}
