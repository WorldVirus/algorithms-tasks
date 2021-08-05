// https://leetcode.com/problems/buildings-with-an-ocean-view/
package buildings_with_ocean

func findBuildings(heights []int) []int {
	answerIndexes := []int{}

	for i := 0; i < len(heights); i += 1 {
		index := len(answerIndexes) - 1
		for index >= 0 && heights[answerIndexes[index]] <= heights[i] {
			answerIndexes = answerIndexes[:len(answerIndexes)-1]
			index -= 1
		}

		answerIndexes = append(answerIndexes, i)
	}

	return answerIndexes
}
