// https://leetcode.com/problems/car-fleet-ii/
package car_fleet_ii

import "math"

func getCollisionTimes(cars [][]int) []float64 {
	stack := [][]float64{}
	answer := []float64{}
	for i := len(cars) - 1; i >= 0; i -= 1 {
		pos := float64(cars[i][0])
		speed := float64(cars[i][1])

		for len(stack) > 0 && (speed <= stack[len(stack)-1][1] || (stack[len(stack)-1][0]-pos)/(speed-stack[len(stack)-1][1]) >= stack[len(stack)-1][2]) {
			stack = stack[:len(stack)-1]
		}

		if len(stack) == 0 {
			stack = append(stack, []float64{pos, speed, math.MaxInt32})
			answer = append(answer, -1)
			continue
		}

		colis := float64(stack[len(stack)-1][0]-pos) / float64(speed-stack[len(stack)-1][1])
		answer = append(answer, float64(colis))
		stack = append(stack, []float64{pos, speed, colis})
	}

	for i := 0; i < len(answer)/2; i += 1 {
		answer[i], answer[len(answer)-1-i] = answer[len(answer)-1-i], answer[i]
	}
	return answer
}
