/**
 * Forward declaration of isBadVersion API.
 * @param   version   your guess about first bad version
 * @return 	 	      true if current version is bad
 *			          false if current version is good
 * func isBadVersion(version int) bool;
 */

package first_bad_version

// https://leetcode.com/problems/first-bad-version/
func firstBadVersion(n int) int {
	start, end := 0, n

	for start < end {
		mid := start + ((end - start) / 2)

		if isBadVersion(mid) {
			end = mid
			continue
		}
		start = mid + 1
	}

	return end
}
