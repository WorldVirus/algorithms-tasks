// https://leetcode.com/problems/maximum-length-of-repeated-subarray/
package maximum_length_of_repeated_subarray

func findLength(nums1 []int, nums2 []int) int {
	dp := make([][]int, len(nums1)+1)
	for i := 0; i < len(nums1)+1; i += 1 {
		dp[i] = make([]int, len(nums2)+1)
	}

	var ans int

	for i := 1; i < len(nums1)+1; i += 1 {
		for j := 1; j < len(nums2)+1; j += 1 {
			if nums1[i-1] == nums2[j-1] {
				dp[i][j] += dp[i-1][j-1] + 1
				if ans < dp[i][j] {
					ans = dp[i][j]
				}
			}
		}
	}

	return ans
}
