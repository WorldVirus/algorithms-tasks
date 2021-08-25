// https://leetcode.com/problems/max-consecutive-ones-iii/
package max_consequtive_ones

import "math"

func longestOnes(nums []int, k int) int {
	max := math.MinInt32
	var start, zerosCounter int

	for i := 0; i < len(nums); i += 1 {
		if nums[i] == 0 {
			zerosCounter += 1
		}

		for zerosCounter > k && start <= i {
			if nums[start] == 0 {
				zerosCounter -= 1
			}
			start += 1
		}
		if max < i-start+1 {
			max = i - start + 1
		}
	}

	return max
}
