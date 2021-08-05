// https://leetcode.com/problems/insert-interval/
package insert_interval

func insert(intervals [][]int, newInterval []int) [][]int {
	answer := [][]int{}
	index := 0
	for index < len(intervals) && newInterval[0] > intervals[index][1] {
		answer = append(answer, intervals[index])
		index += 1
	}

	for index < len(intervals) && intervals[index][0] <= newInterval[1] {
		if newInterval[0] > intervals[index][0] {
			newInterval[0] = intervals[index][0]
		}

		if newInterval[1] < intervals[index][1] {
			newInterval[1] = intervals[index][1]
		}
		index += 1
	}

	answer = append(answer, newInterval)

	for index < len(intervals) {
		answer = append(answer, intervals[index])
		index += 1
	}

	return answer
}
