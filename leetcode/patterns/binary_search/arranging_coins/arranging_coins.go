// https://leetcode.com/problems/arranging-coins/
package arranging_coins

func arrangeCoins(n int) int {
	var left int
	right := n

	for left <= right {
		mid := left + (right-left)/2 // 6
		sum := ((mid + 1) * mid) / 2 // 6

		if sum == n {
			return mid
		}

		if sum > n {
			right = mid - 1
			continue
		}

		left = mid + 1
	}

	return right
}
