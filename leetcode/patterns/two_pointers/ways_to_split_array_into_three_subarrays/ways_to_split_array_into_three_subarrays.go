// https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/
// https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/discuss/999257/C%2B%2BJavaPython-O(n)-with-picture
package ways_to_split_array_into_three_subarrays

func waysToSplit(nums []int) int {
	prefAr := make([]int, len(nums))
	prefAr[0] = nums[0]
	for i := 1; i < len(nums); i += 1 {
		prefAr[i] = prefAr[i-1] + nums[i]
	}

	var i, j, k int
	var answer int
	for i < len(prefAr)-2 {
		for j <= i || j < len(prefAr)-1 && 2*prefAr[i] > prefAr[j] {
			j += 1
		}

		for k < j || (k < len(prefAr)-1 && prefAr[k]-prefAr[i] <= prefAr[len(prefAr)-1]-prefAr[k]) {
			k += 1
		}

		answer += k - j
		i += 1
	}

	return answer % 1000000007
}
