// https://leetcode.com/problems/next-greater-element-ii/
package next_greater_element_ii

func nextGreaterElements(nums []int) []int {
	stack := []int{}
	answerAr := make([]int, len(nums))
	for i := 0; i < len(nums); i += 1 {
		for len(stack) > 0 && nums[stack[len(stack)-1]] < nums[i] {
			answerAr[stack[len(stack)-1]] = nums[i]
			stack = stack[:len(stack)-1]
		}

		stack = append(stack, i)
	}

	for len(stack) > 0 {
		curVal := -1
		for i := 0; i < stack[len(stack)-1]; i += 1 {
			if nums[i] > nums[stack[len(stack)-1]] {
				curVal = nums[i]
				break
			}
		}

		answerAr[stack[len(stack)-1]] = curVal
		stack = stack[:len(stack)-1]
	}

	return answerAr
}
