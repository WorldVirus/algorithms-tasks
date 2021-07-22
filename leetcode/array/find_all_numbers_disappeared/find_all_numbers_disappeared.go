// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
package find_all_numbers_disappeared

func findDisappearedNumbers(nums []int) []int {
	answer := []int{}
	//[4,3,2,7,8,2,3,1]
	for i, _ := range nums {
		curIndex := nums[i] // 8
		if nums[i] < 0 {
			curIndex *= (-1) //2
		}
		// [-1,-2,-3,-4]
		// 1
		if nums[curIndex-1] > 0 {
			nums[curIndex-1] *= (-1)
			// [4,-3,-2,-7,8,2,-3,-1]
		}
	}

	for i, item := range nums {
		if item > 0 {
			answer = append(answer, i+1)
		}
	}

	return answer
}
