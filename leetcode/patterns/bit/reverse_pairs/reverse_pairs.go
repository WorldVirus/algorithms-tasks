// https://leetcode.com/problems/reverse-pairs/
// solution: https://leetcode.com/problems/reverse-pairs/discuss/97268/General-principles-behind-problems-similar-to-%22Reverse-Pairs%22
func reversePairs(nums []int) int {
	var answer int
	bit := make([]int, len(nums)+1)
	copAr := make([]int, len(nums))
	for i := range nums {
		copAr[i] = nums[i]
	}

	sort.SliceStable(copAr, func(a, b int) bool {
		return copAr[a] < copAr[b]
	})

	for i := 0; i < len(nums); i += 1 {
		indexF := index(copAr, nums[i]*2+1)
		answer += search(bit, indexF)
		indexS := index(copAr, nums[i])

		insert(bit, indexS)
	}
	return answer
}

func search(bit []int, index int) int {
	var sum int

	for index < len(bit) {
		sum += bit[index]
		index += index & -index
	}

	return sum
}

func insert(bit []int, index int) {
	for index > 0 {
		bit[index] += 1
		index -= index & -index
	}
}

func index(bit []int, val int) int {
	var left, mid int
	right := len(bit) - 1

	for left <= right {
		mid = left + (right-left)/2

		if bit[mid] >= val {
			right = mid - 1
			continue
		}

		left = mid + 1
	}

	return left + 1
}
