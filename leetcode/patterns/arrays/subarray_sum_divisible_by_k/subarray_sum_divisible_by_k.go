// https://leetcode.com/problems/subarray-sums-divisible-by-k/
package subarray_sum_divisible_by_k

func subarraysDivByK(nums []int, k int) int {
	divisionFreq := map[int]int{}
	divisionFreq[0] += 1
	var answer, sum int

	for i := 0; i < len(nums); i += 1 {
		sum = (sum + nums[i]) % k // it's works because a % k % k % k .... n times is still same as a % k
		// (a+b)%c = (a%c + b %c) %c
		// (a%c)%c = a%c
		if sum < 0 {
			sum += k
		}
		if val, ok := divisionFreq[sum]; ok {
			answer += val
		}

		divisionFreq[sum] += 1
	}

	return answer
}
