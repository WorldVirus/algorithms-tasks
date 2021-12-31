// https://leetcode.com/problems/maximum-subarray-min-product/
package maximum_subarray_min_product

// not submited
// https://leetcode.com/problems/maximum-subarray-min-product/discuss/1198704/C%2B%2BPython-3-Monostack-explanation-with-picture-O(N)-Time
func maxSumMinProduct(nums []int) int {
	leftPart := make([]int, len(nums))
	rightPart := make([]int, len(nums))
	prefSum := make([]int, len(nums)+1)
	stack := [][]int{}

	for i := 1; i < len(nums)+1; i += 1 {
		prefSum[i] = prefSum[i-1] + nums[i-1]
	}

	for i := 0; i < len(nums); i += 1 {
		var cur int
		for len(stack) > 0 && nums[stack[len(stack)-1][0]] >= nums[i] {
			cur += stack[len(stack)-1][1]
			stack = stack[:len(stack)-1]
		}
		leftPart[i] = cur
		stack = append(stack, []int{i, cur})

	}

	for i := len(nums) - 2; i > -1; i -= 1 {
		var cur int
		for len(stack) > 0 && nums[stack[len(stack)-1][0]] >= nums[i] {
			cur += stack[len(stack)-1][1]
			stack = stack[:len(stack)-1]
		}
		rightPart[i] = cur
		stack = append(stack, []int{i, cur})
	}

	var answer int
	for i := 0; i < len(nums); i += 1 {
		curVal := nums[i] * (prefSum[i+rightPart[i]+1] - prefSum[i-leftPart[i]])
		if answer < curVal {
			answer = curVal
		}
	}

	return answer % 1000000007
}
