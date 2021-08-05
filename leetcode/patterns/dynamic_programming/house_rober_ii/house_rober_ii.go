// https://leetcode.com/problems/house-robber-ii/
package house_rober_ii

func rob(nums []int) int {
	if len(nums) == 1 {
		return nums[0]
	}

	max0 := rob0(nums)
	max1 := rob1(nums)

	if max0 < max1 {
		return max1
	}

	return max0
}

func rob0(nums []int) int {
	cur, prev := 0, 0
	// [1,3,1,3,100]
	for i := 0; i < len(nums)-1; i += 1 {
		tmp := cur
		if prev+nums[i] > cur {
			cur = prev + nums[i]
		}

		prev = tmp
	}

	return cur
}

func rob1(nums []int) int {
	cur, prev := 0, 0

	for i := 1; i < len(nums); i += 1 {
		tmp := cur

		if prev+nums[i] > cur {
			cur = prev + nums[i]
		}

		prev = tmp
	}

	return cur

}
