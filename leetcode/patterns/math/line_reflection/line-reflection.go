// https://leetcode.com/problems/line-reflection/
package line_reflection

import (
	"fmt"
	"math"
)

func isReflected(points [][]int) bool {

	minX, maxX := math.MaxInt32, math.MinInt32
	h := map[string]bool{}
	for i := 0; i < len(points); i += 1 {
		if points[i][0] < minX {
			minX = points[i][0]
		}

		if points[i][0] > maxX {
			maxX = points[i][0]
		}

		curKey := fmt.Sprint(points[i][0]) + "a" + fmt.Sprint(points[i][1])
		h[curKey] = true
	}

	sum := maxX + minX
	for i := 0; i < len(points); i += 1 {
		curKey := fmt.Sprint(sum-points[i][0]) + "a" + fmt.Sprint(points[i][1])

		if _, ok := h[curKey]; !ok {
			return false
		}
	}

	return true
}
