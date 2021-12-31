// https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
package maximum_points_you_can_obtain

func maxScore(cardPoints []int, k int) int {
	var answer int
	if k == len(cardPoints) {
		for i := range cardPoints {
			answer += cardPoints[i]
		}

		return answer
	}

	size := len(cardPoints)

	beginPart := make([]int, k)
	endPart := make([]int, k)

	beginPart[0] = cardPoints[0]
	for i := 1; i < k; i += 1 {
		beginPart[i] = cardPoints[i] + beginPart[i-1]
	}

	endPart[0] = cardPoints[size-1]
	index := 1
	for i := size - 2; i > size-k-1; i -= 1 {
		endPart[index] = cardPoints[i] + endPart[index-1]
		index += 1
	}

	var start int

	for start < k-1 {
		tempMax := beginPart[start] + endPart[len(endPart)-start-2]
		if answer < tempMax {
			answer = tempMax
		}
		start += 1
	}

	cornerCasesMax := beginPart[len(beginPart)-1]
	if beginPart[len(beginPart)-1] < endPart[len(endPart)-1] {
		cornerCasesMax = endPart[len(endPart)-1]
	}

	if answer < cornerCasesMax {
		return cornerCasesMax
	}

	return answer
}
