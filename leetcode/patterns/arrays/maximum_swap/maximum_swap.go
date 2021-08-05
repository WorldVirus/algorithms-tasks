// https://leetcode.com/problems/maximum-swap/
package maximum_swap

import (
	"sort"
)

func maximumSwap(num int) int {
	arrSingleDigits := []int{}
	copValue := num

	for copValue > 0 {
		curDigit := copValue % 10
		arrSingleDigits = append(arrSingleDigits, curDigit)
		copValue = (copValue - curDigit) / 10
	}

	sortedSingleDigits := append([]int{}, arrSingleDigits...)
	sort.SliceStable(sortedSingleDigits, func(a, b int) bool {
		return sortedSingleDigits[a] > sortedSingleDigits[b]
	})

	var index, indexOfMaxPos int

	for i := len(arrSingleDigits) - 1; i >= 0; i -= 1 {
		if arrSingleDigits[i] != sortedSingleDigits[index] {

			for indexOfMaxPos < i {
				if arrSingleDigits[indexOfMaxPos] == sortedSingleDigits[index] {
					break
				}
				indexOfMaxPos += 1
			}

			arrSingleDigits[i], arrSingleDigits[indexOfMaxPos] = arrSingleDigits[indexOfMaxPos], arrSingleDigits[i]

			break
		}

		index += 1
	}

	var answer int

	coeff := 1

	for i := 0; i < len(arrSingleDigits); i += 1 {
		answer += arrSingleDigits[i] * coeff

		coeff *= 10

	}

	return answer

}
