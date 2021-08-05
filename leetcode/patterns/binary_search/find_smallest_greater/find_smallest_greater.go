// https://leetcode.com/problems/find-smallest-letter-greater-than-target/
package find_smallest_greater

func nextGreatestLetter(letters []byte, target byte) byte {
	start, end := 0, len(letters)
	if letters[end-1] <= target {
		return letters[start]
	}

	for start < end {
		mid := start + ((end - start) / 2)
		if letters[mid] <= target {
			start = mid + 1
			continue
		}
		if letters[mid] > target {
			end = mid
			continue
		}

	}

	return letters[end]
}
