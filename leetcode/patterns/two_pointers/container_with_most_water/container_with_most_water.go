// https://leetcode.com/problems/container-with-most-water/ - not submited
package container_with_most_water

func maxArea(height []int) int {
	// [1,8,6,2,5,4,8,3,7]

	start := 0
	end := len(height) - 1                 // 8
	maxH := heightCalc(start, end, height) // 8

	for start < end {
		startHeight := heightCalc(start, end, height) // 49
		endHeight := heightCalc(start, end, height)   // 7
		maxH = max(maxH, startHeight, endHeight)
		if startHeight > endHeight {
			end -= 1
		} else {
			start += 1
		}
	}

	return maxH

}

func max(a, b, c int) int {
	if a >= b && a >= c {
		return a
	}

	if b >= c && b >= a {
		return b
	}

	return c
}

func heightCalc(start, end int, height []int) int {
	var curM int
	if height[start] < height[end] {
		curM = height[start]
	} else {
		curM = height[end]
	}

	return curM * (end - start)
}
