// https://leetcode.com/problems/largest-rectangle-in-histogram/
package largest_rectangle_in_histogram

func largestRectangleArea(heights []int) int {
	if len(heights) == 0 {
		return 0
	}

	if len(heights) == 1 {
		return heights[0]
	}

	stack := []int{}

	area := 0
	for i := 0; i < len(heights); i++ {
		for len(stack) > 0 && heights[stack[len(stack)-1]] > heights[i] {
			height := heights[stack[len(stack)-1]]

			stack = stack[:len(stack)-1]
			for len(stack) > 0 && heights[stack[len(stack)-1]] == height {
				stack = stack[:len(stack)-1]
			}

			var width int
			if len(stack) > 0 {
				width = i - stack[len(stack)-1] - 1
			} else {
				width = i
			}
			area = max(area, width*height)
		}
		stack = append(stack, i)
	}

	for len(stack) > 0 {
		height := heights[stack[len(stack)-1]]

		stack = stack[:len(stack)-1]
		for len(stack) > 0 && heights[stack[len(stack)-1]] == height {
			stack = stack[:len(stack)-1]
		}

		var width int
		if len(stack) > 0 {
			width = len(heights) - stack[len(stack)-1] - 1
		} else {
			width = len(heights)
		}
		area = max(area, width*height)
	}
	return area
}

func max(x, y int) int {
	if x < y {
		return y
	}
	return x
}
