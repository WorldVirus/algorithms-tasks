// https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/

// DIFF ARRAY (VISUALIZATION HISTOGRAM HELPS UNDERSTAND)
package minimum-number-of-increments_on_subarrays_to_form

func minNumberOperations(target []int) int {
	answer := target[0]
	for i := 1; i < len(target); i += 1 {
		tempDif := target[i] - target[i-1]
		if tempDif > 0 {
			answer += tempDif
		}
	}

	return answer
}

