// https://leetcode.com/problems/longest-harmonious-subsequence/
package longest_harmonic_subsequence

func findLHS(nums []int) int {
	h := map[int]int{}
	var max int
	for _, item := range nums {
		h[item] += 1
	}

	for key, val := range h {
		if v, ok := h[key+1]; ok {
			if max < val+v {
				max = val + v
			}
		}
	}

	return max
	//    var max, index int

	//     for index < len(nums) && len(nums) - index > max{
	//         j := index + 1
	//         counterMin, counterMax := 1, 1
	//         var isHaveMax, isHaveMin bool
	//         for j < len(nums) {
	//             diff := nums[index] - nums[j]
	//             if diff == 1 || diff == 0 {
	//                 if diff == 1 && !isHaveMax{
	//                     isHaveMax = true
	//                 }
	//                 counterMax += 1
	//             }

	//             if diff == -1 || diff == 0{
	//                 if diff == -1 && !isHaveMin{
	//                     isHaveMin = true
	//                 }
	//                 counterMin += 1
	//             }

	//             j += 1
	//         }

	//         if !isHaveMin {
	//             counterMin = 0
	//         }

	//         if !isHaveMax {
	//             counterMax = 0
	//         }

	//         if counterMin > counterMax {
	//             counterMax = counterMin
	//         }

	//         if max < counterMax {
	//             max = counterMax
	//         }
	//         index += 1
	//     }

	//     return max
}
