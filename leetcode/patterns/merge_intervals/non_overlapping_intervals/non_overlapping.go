// https://leetcode.com/problems/non-overlapping-intervals/
package non_overlapping_intervals

import "sort"

func eraseOverlapIntervals(intervals [][]int) int {
	sort.SliceStable(intervals, func(i, j int) bool {
		return intervals[i][1] < intervals[j][1]
	})

	end := intervals[0][1]
	count := 1
	for i := 1; i < len(intervals); i += 1 {
		if intervals[i][0] >= end {
			count += 1
			end = intervals[i][1]
		}
	}

	return len(intervals) - count
}
