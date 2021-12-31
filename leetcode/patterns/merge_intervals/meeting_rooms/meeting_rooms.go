// https://leetcode.com/problems/meeting-rooms/
package meeting_rooms

import "sort"

func canAttendMeetings(intervals [][]int) bool {
	if len(intervals) == 0 {
		return true
	}

	sort.SliceStable(intervals, func(i, j int) bool {
		return intervals[i][1] < intervals[j][1]
	})

	end := intervals[0][1]

	for i := 1; i < len(intervals); i += 1 {
		if end > intervals[i][0] {
			return false
		}

		end = intervals[i][1]
	}

	return true
}
