// https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/
package minimum_cost_tree_from_leaf_values

func mctFromLeafValues(arr []int) int {
	stack := []int{}
	var answer int

	for i := 0; i < len(arr); i += 1 {
		for len(stack) > 0 && stack[len(stack)-1] <= arr[i] {
			curVal := stack[len(stack)-1]
			stack = stack[:len(stack)-1]

			if len(stack) > 0 {
				min := stack[len(stack)-1]
				if min > arr[i] {
					min = arr[i]
				}
				answer += curVal * min
				continue
			}

			answer += curVal * arr[i]
		}

		stack = append(stack, arr[i])
	}

	for len(stack) > 1 {
		curVal := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		answer += curVal * stack[len(stack)-1]
	}

	return answer
}
