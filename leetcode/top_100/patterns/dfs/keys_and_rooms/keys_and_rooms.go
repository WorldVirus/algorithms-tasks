// https://leetcode.com/problems/keys-and-rooms/
package keys_and_rooms

func canVisitAllRooms(rooms [][]int) bool {
	if len(rooms) == 1 && len(rooms) == 0 {
		return true
	}
	adjecencyList := make(map[int][]int)

	for i := 0; i < len(rooms); i += 1 {
		for j := 0; j < len(rooms[i]); j += 1 {
			adjecencyList[i] = append(adjecencyList[i], rooms[i][j])
		}
	}

	h := map[int]bool{0: true}
	stack := []int{0}

	for len(stack) > 0 {
		curAr := adjecencyList[stack[0]]
		stack = stack[1:]

		for i := 0; i < len(curAr); i += 1 {
			if h[curAr[i]] {
				continue
			}

			h[curAr[i]] = true
			stack = append(stack, curAr[i])
		}
	}

	return len(h) == len(rooms)
}
