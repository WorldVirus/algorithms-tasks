// https://leetcode.com/problems/hamming-distance/
package hamming_distance

func hammingDistance(x int, y int) int {
	// yDecimal := strconv.FormatInt(int64(y), 2)

	var answer int
	xor := x ^ y

	for xor != 0 {
		if xor&1 == 1 {
			answer += 1
		}

		xor = xor >> 1
	}

	return answer
}
