// https://leetcode.com/problems/generate-parentheses/
package generate_parentless

var Answer = []string{}

func CalcComb(cur_comb string, o_counter int, c_counter int, size int) {
	if size < o_counter || size < c_counter {
		return
	}

	if size == o_counter && size == c_counter {
		Answer = append(Answer, cur_comb)
		return
	}

	if c_counter < o_counter {
		CalcComb(cur_comb+")", o_counter, c_counter+1, size)
	}

	CalcComb(cur_comb+"(", o_counter+1, c_counter, size)
}

func generateParenthesis(n int) []string {
	CalcComb("", 0, 0, n)

	return Answer
}
