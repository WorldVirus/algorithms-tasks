// https://leetcode.com/problems/valid-perfect-square/
package perfect_square

func isPerfectSquare(num int) bool {
	if num == 1 {
		return true
	}

	start, end := 1, num/2

	for start <= end {
		mid := start + ((end - start) / 2)
		cur := mid * mid

		if cur == num {
			return true
		}

		if cur < num {
			start = mid + 1
			continue
		}

		end = mid - 1
	}

	return false
}
