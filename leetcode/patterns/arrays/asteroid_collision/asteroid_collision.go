// https://leetcode.com/problems/asteroid-collision/
package asteroid_collision

func asteroidCollision(asteroids []int) []int {
	var index int

	for index < len(asteroids)-1 && index >= 0 {
		if asteroids[index] > 0 && asteroids[index+1] < 0 {
			cur := asteroids[index]
			next := asteroids[index+1]
			if cur < 0 {
				cur *= (-1)
			} else {
				next *= (-1)
			}

			if cur == next {
				asteroids = append(asteroids[:index+1], asteroids[index+2:]...)
				asteroids = append(asteroids[:index], asteroids[index+1:]...)
				if index > 0 {
					index -= 1
				}
			} else {

				if cur > next {
					asteroids = append(asteroids[:index+1], asteroids[index+2:]...)
				} else {
					asteroids = append(asteroids[:index], asteroids[index+1:]...)
					if index > 0 {
						index -= 1
					}
				}
			}

			continue
		}

		index += 1
	}

	return asteroids
}
