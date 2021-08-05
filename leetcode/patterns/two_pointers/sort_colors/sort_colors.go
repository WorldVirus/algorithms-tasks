// https://leetcode.com/problems/sort-colors/ (have js submission with two pointers [swap elements, move pointer when less])
package sort_colors

func sortColors(nums []int) {
	var freqZ, freqO, freqT int
	// [2,0,2,1,1,0]
	for _, item := range nums {
		if item == 0 {
			freqZ += 1
		}
		if item == 1 {
			freqO += 1
		}
		if item == 2 {
			freqT += 1
		}
	}

	for i := 0; i < len(nums); i += 1 {
		if freqZ > 0 {
			nums[i] = 0
			freqZ -= 1
			continue
		}
		if freqO > 0 {
			nums[i] = 1
			freqO -= 1
			continue
		}
		if freqT > 0 {
			nums[i] = 2
			freqT -= 1
		}
	}
}
