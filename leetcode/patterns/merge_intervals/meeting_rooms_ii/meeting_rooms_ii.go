// https://leetcode.com/problems/meeting-rooms-ii/
// possible to use Priority queues https://leetcode.com/problems/meeting-rooms-ii/solution/
// https://en.wikipedia.org/wiki/Priority_queue#Summary_of_running_times

package meeting_rooms_ii

import "sort"

func minMeetingRooms(intervals [][]int) int {
	h := map[int]int{}

	for _, v := range intervals {
		if _, ok := h[v[0]]; !ok {
			h[v[0]] = 0
		}
		h[v[0]] += 1

		if _, ok := h[v[1]]; !ok {
			h[v[1]] = 0
		}

		h[v[1]] -= 1
	}

	key := []int{}
	for k := range h {
		key = append(key, k)
	}
	// there is no default sort for hashmap key when scan hashmap
	sort.SliceStable(key, func(i, j int) bool {
		return key[i] < key[j]
	})

	room, answer := 0, 0

	for _, k := range key {
		room += h[k]
		if answer < room {
			answer = room
		}

	}

	return answer
}
