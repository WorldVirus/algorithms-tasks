// https://leetcode.com/problems/number-of-longest-increasing-subsequence/
// inspired by https://leetcode.com/problems/number-of-longest-increasing-subsequence/discuss/1230468/C%2B%2B-%3A-Clean-DP-solution-oror-Easy-and-Explained
package number_of_longest

func findNumberOfLIS(nums []int) int {
	if len(nums) == 1 {
		return 1
	}
	list := make([]int, len(nums))
	count := make([]int, len(nums))
	for i := range list {
		list[i] = 1
		count[i] = 1
	}
	var max int
	var maxSize int

	for i := 1; i < len(list); i += 1 {
		for j := 0; j < i; j += 1 {
			if nums[i] > nums[j] {
				if list[i] < list[j]+1 {
					list[i] = list[j] + 1
					count[i] = count[j]
					continue
				}
				if list[i] == list[j]+1 {
					count[i] += count[j]
				}
			}
		}

		if list[i] > maxSize {
			maxSize = list[i]
		}
	}

	for i, l := range list {
		if l == maxSize {
			max += count[i]
		}
	}

	return max
}
