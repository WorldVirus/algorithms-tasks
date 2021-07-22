// https://leetcode.com/problems/jump-game/
package jump_game

func canJump(nums []int) bool {

	// greedy
	lastPos := len(nums) - 1
	for i := len(nums) - 1; i >= 0; i -= 1 {
		if i+nums[i] >= lastPos {
			lastPos = i
		}
	}

	return lastPos == 0

	// DP Solution need fix final scan dp
	//     if len(nums) == 1  {
	//         return true
	//     }

	//     dp := make([][]bool, len(nums))
	//     for i := range dp {
	//         dp[i] = make([]bool, len(nums))
	//     }

	//     for i, item := range nums {
	//         index := 1
	//         for index <= item && index + i < len(nums) {
	//             dp[i+index][i] = true
	//             index += 1
	//         }
	//     }

	//     fmt.Println(dp)
	//     index := 1
	//     for dp[index][0] {
	//         i, j := index, 0

	//         for i < len(dp) && j < len(dp) {
	//             if dp[i][j] && i == len(dp)- 1{
	//                 fmt.Println(i,j)
	//                 return true
	//             }
	//             if !dp[i][j]{
	//                 break;
	//             }
	//             i += 1
	//             j += 1
	//         }

	//         index += 1
	//     }

	//     return false
}

// [[false false false false]
//  [true false false false]
//  [false true false false]
//  [false true false false]]

// [[false false false false false]
//  [true false false false false]
//  [true true false false false]
//  [true true true false false]
//  [false false false false false]]
