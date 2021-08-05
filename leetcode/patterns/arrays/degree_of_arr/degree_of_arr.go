// https://leetcode.com/problems/degree-of-an-array/
package degree_of_arr

func findShortestSubArray(nums []int) int {
	answerMin := 50000
	max := -1
	frequency := map[int][]int{}
	//[1,2,2,3,1]
	for index, item := range nums {
		if val, ok := frequency[item]; ok {
			val[0] += 1
			val[2] = index
			continue
		}
		frequency[item] = append(frequency[item], 1, index, 0)

		// frequency = {1:[2,0,4], 2:[3,1,6],3: [1,3,0], 4:[1,5,0] }
	}

	// frequency = {1:[2,0,4], 2:[2,1,2],3: [1,3,0]}

	for _, val := range frequency {

		if val[0] == max {
			if val[2] != 0 {
				curDiff := val[2] - val[1] + 1
				if answerMin > curDiff {
					answerMin = curDiff
				}
			}
		}

		if val[0] > max {
			max = val[0] // 2
			if val[2] != 0 {
				answerMin = val[2] - val[1] + 1 // 5
				continue
			}

			answerMin = 1
		}
	}

	return answerMin
}
