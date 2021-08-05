// https://leetcode.com/problems/132-pattern/
package 132_pattern

func find132pattern(nums []int) bool {
	//     if len(nums) < 3 {
	//         return false
	//     }

	//     // [1,2,1,3,5,4,2]
	//     //  f
	//     //          s
	//     //            t
	//     for f := 0; f < len(nums) - 2; f += 1 {
	//         s, t := f + 1, f + 2

	//         for t < len(nums) {
	//             if nums[f] < nums[t] && nums[t] < nums[s]{
	//                 return true
	//             }

	//             if nums[t] >= nums[s]{
	//                 s = t
	//             }

	//             t += 1
	//         }
	//     }

	//     return false

	stack := []int{}
	second := math.MinInt32
	for i := len(nums) - 1; i >= 0; i -= 1 {
		if second > nums[i] {
			return true
		}

		for len(stack) > 0 && stack[len(stack)-1] < nums[i] {
			second = stack[len(stack)-1]
			stack = stack[:len(stack)-1]
		}

		stack = append(stack, nums[i])
	}

	return false
}