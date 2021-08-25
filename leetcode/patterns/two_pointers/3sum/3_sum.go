// https://leetcode.com/problems/3sum/
package 3sum
func threeSum(nums []int) [][]int {
	answer := [][]int{}
	if len(nums) < 3 {
		return answer
	}

	sort.SliceStable(nums, func(i, j int) bool {
		return nums[i] < nums[j]
	})

	for i := 0; i < len(nums)-2; i += 1 {
		if i > 0 && nums[i-1] == nums[i] {
			continue
		}

		tempSum := nums[i]
		start, end := i+1, len(nums)-1

		for start < end {
			tempSum += nums[start] + nums[end]
			if tempSum == 0 {
				answer = append(answer, []int{nums[i], nums[start], nums[end]})
				for start < len(nums)-1 && nums[start] == nums[start+1] {
					start += 1
				}

				for end > 0 && nums[end] == nums[end-1] {
					end -= 1
				}

				start += 1
				end -= 1
				tempSum = nums[i]
				continue
			}

			if tempSum > 0 {
				end -= 1
			} else {
				start += 1
			}

			tempSum = nums[i]
		}
	}

	return answer
}

