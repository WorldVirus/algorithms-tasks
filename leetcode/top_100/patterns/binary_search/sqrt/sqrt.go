// https://leetcode.com/problems/sqrtx/
package sqrt

func mySqrt(x int) int {
	if x < 2 {
		return x
	}

	start, end, mid := 2, x/2, 0

	for start <= end {
		mid = start + ((end - start) / 2)
		cur := mid * mid
		if cur == x {
			return mid
		}

		if cur > x {
			end = mid - 1
			continue
		}

		if cur < x {
			start = mid + 1
		}
	}

	return end
}
