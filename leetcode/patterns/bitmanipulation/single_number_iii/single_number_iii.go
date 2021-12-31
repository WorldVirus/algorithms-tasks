// https://leetcode.com/problems/single-number-iii/
package single_number_iii

func singleNumber(nums []int) []int {
	var bitMask int

	for i := 0; i < len(nums); i += 1 {
		bitMask ^= nums[i]
	}

	diff := bitMask & (-bitMask)

	var uniqeVal int
	for i := 0; i < len(nums); i += 1 {
		if diff&nums[i] != 0 {
			uniqeVal ^= nums[i]
		}
	}

	return []int{uniqeVal, bitMask ^ uniqeVal}
}
