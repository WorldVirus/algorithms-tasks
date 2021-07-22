// https://leetcode.com/problems/sliding-window-maximum/
package sliding_window_maximum

func maxSlidingWindow(nums []int, k int) []int {
	answer := []int{}
	deque := []int{}

	for i := 0; i < len(nums); i += 1 {
		for len(deque) > 0 && i-deque[0] > k-1 {
			deque = deque[1:]
		}

		for len(deque) > 0 && nums[deque[len(deque)-1]] < nums[i] {
			deque = deque[:len(deque)-1]
		}

		deque = append(deque, i)

		if i >= k-1 {
			answer = append(answer, nums[deque[0]])
		}
	}

	return answer
}
