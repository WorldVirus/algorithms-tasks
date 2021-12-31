// https://leetcode.com/problems/unique-paths-iii/
package unique_paths_iii

func uniquePathsIII(grid [][]int) int {
	var rowIndex, colIndex, openCounter, answer int
	for i := 0; i < len(grid); i += 1 {
		for j := 0; j < len(grid[0]); j += 1 {
			if grid[i][j] >= 0 {
				openCounter += 1
			}
			if grid[i][j] == 1 {
				rowIndex = i
				colIndex = j
			}
		}
	}

	calcWays(rowIndex, colIndex, openCounter, &answer, grid)

	return answer
}

func calcWays(posI, posJ, freeCell int, answer *int, grid [][]int) {
	if grid[posI][posJ] == 2 && freeCell == 1 {
		*answer += 1

		return
	}

	temp := grid[posI][posJ]
	grid[posI][posJ] = -1
	freeCell -= 1

	arrRows := []int{0, 0, 1, -1}
	arrCols := []int{1, -1, 0, 0}
	for i := 0; i < 4; i += 1 {
		nextRow, nextCol := posI+arrRows[i], posJ+arrCols[i]
		if nextRow >= len(grid) || nextCol >= len(grid[0]) || nextRow < 0 || nextCol < 0 {
			continue
		}
		if grid[nextRow][nextCol] < 0 {
			continue
		}

		calcWays(nextRow, nextCol, freeCell, answer, grid)
	}

	grid[posI][posJ] = temp
}
