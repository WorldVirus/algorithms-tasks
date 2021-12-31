// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
package longest_subarray_of_1s

func longestSubarray(nums []int) int {
	var isChanged bool

	var end, answer int

	for i := 0; i < len(nums); i += 1 {
		if nums[i] == 1 {
			isChanged = true
			end = i
			posZero := i
			var removedCounter int
			var counter int
			for end < len(nums) && removedCounter != 2 {
				if nums[end] == 0 {
					removedCounter += 1
					if removedCounter == 1 {
						posZero = end
					}
				} else {
					counter += 1
				}

				if removedCounter == 2 {
					break
				}

				end += 1
			}

			if end != len(nums)-1 {
				i = posZero
			}

			if answer < counter {
				answer = counter
			}
		}

	}

	if answer == len(nums) {
		return answer - 1
	}
	if isChanged == false {
		return 0
	}

	return answer
}
