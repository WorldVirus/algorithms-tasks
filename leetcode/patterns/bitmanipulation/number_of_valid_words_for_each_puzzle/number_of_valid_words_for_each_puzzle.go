// https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/
package number_of_valid_words_for_each_puzzle

func findNumOfValidWords(words []string, puzzles []string) []int {
	freqWords := make(map[int]int)
	// Count how many words are represented by a specific bitmask
	for _, word := range words {
		// get mask for each word
		bs := bits(word)
		if _, ok := freqWords[bs]; !ok {
			freqWords[bs] = 1
		} else {
			freqWords[bs] += 1
		}
	}

	result := make([]int, len(puzzles))
	for i, puzzle := range puzzles {
		// get mask for puzzle
		mask := bits(puzzle)
		num := 0 // number of words matched in a puzzle

		// set first char bit
		fb := 1 << (puzzle[0] - 'a')

		// Iterate subsets of current puzzle's character set
		// cur = (cur - 1) & mask runs through (0..(1<<N)) & mask
		for cur := mask; cur != 0; cur = ((cur - 1) & mask) {
			if (cur & fb) == 0 {
				continue
			}
			if v, ok := freqWords[cur]; ok {
				num += v
			}
		}
		result[i] = num
	}
	return result
}

func bits(s string) int {
	var bits int
	for _, l := range s {
		// set the bit in the mask
		bits |= 1 << (l - 'a')
	}
	return bits
}

// TLE
//     freqWords := make([]map[byte]bool, len(words))
//     freqPuzzles := make([]map[byte]bool, len(puzzles))

//     for i := 0; i < len(words); i += 1{
//         curStr := words[i]

//         for j := 0; j < len(curStr); j += 1{
//             if freqWords[i] == nil{
//                freqWords[i] = map[byte]bool{}
//             }
//             freqWords[i][curStr[j]] = true
//         }
//     }

//      for i := 0; i < len(puzzles); i += 1{
//         curStr := puzzles[i]
//          for j := 0; j < len(curStr); j += 1{
//                if freqPuzzles[i] == nil{
//                freqPuzzles[i] = map[byte]bool{}
//             }
//             freqPuzzles[i][curStr[j]] = true
//         }
//     }

//     answer := []int{}

//     for i := 0; i < len(puzzles); i += 1{
//         var curVal int
//         for j := 0; j < len(freqWords); j += 1{
//             // if puzzles[i][0] != words[j][0]{
//             //     continue
//             // }

//             tempH :=freqWords[j]
//             if _, ok := tempH[puzzles[i][0]]; !ok{
//                 continue
//             }

//             isCompleated := true
//             for key := range tempH{
//                 if _, ok := freqPuzzles[i][key]; !ok{
//                     isCompleated = false
//                     break
//                 }
//             }

//             if isCompleated{
//                 curVal += 1
//             }
//         }

//         answer = append(answer, curVal)
//     }

//     return answer
// }
