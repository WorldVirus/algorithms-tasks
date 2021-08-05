// https://leetcode.com/problems/n-queens/ not submited - problem with testing

// approach:

// answer
// run at first row and try to set queen
//     create empty board
//     fill all fields whrere current queen can move
//     recursive call
//         if counter_q == n
//             add cur_board in answer
//         if counter_q < n && index_i == n - 1 && index_j == n - 1
//             finish
//         try to set queen
//             if isEmptyField
//                 fill all fields whrere current queen can move
//                 recursive call (index_i, index_j + 1, board, answer, counter_q + 1)
//                 reset all fields whrere current queen can move

func solveNQueens(n int) [][]string {

	answer := [][]string{}

	for i := 0; i < n; i += 1 {
		board := createEmptyBoard(n)
		calcBoard(0, i, 1, board, &answer)
	}

	return answer
}

func calcBoard(index_i, index_j, counter_q int, board []string, answer *[][]string) {
	if counter_q == len(board) {
		a := append([]string{}, board...)
		*answer = append(*answer, a)
		return
	}
	if counter_q < len(board) && index_i == len(board) && index_j == len(board) {
		return
	}
	for i := index_i; i < len(board); i += 1 {
		for j := index_j; j < len(board); j += 1 {
			if string(board[i][j]) == "." {
				fillFields(i, j, &board)
				calcBoard(index_i+1, 0, counter_q+1, board, answer)
				resetFields(i, j, &board)
			}
		}
	}
}
func createEmptyBoard(n int) []string {
	s := []string{}
	for i := 0; i < n; i += 1 {
		var c string
		for j := 0; j < n; j += 1 {
			c += "."
		}
		s = append(s, c)
	}

	return s
}

func fillFields(i, j int, board *[]string) {
	for k := j; k < len(*board); k += 1 {
		t := (*board[i])
		t[k] = "*"
	}

	for k := i; k < len(*board); k += 1 {
		*board[k][j] = "*"
	}

	index_j := j
	for k := i; k < len(*board); k += 1 {
		if index_j == len(*board) {
			break
		}
		*board[k][index_j] = "*"
		index_j += 1
	}

	index_j = j

	for k := i; k < len(*board); k += 1 {
		if index_j < 0 {
			break
		}
		*board[k][index_j] = "*"
		index_j -= 1
	}
}

func resetFields(i, j int, board *[]string) {
	for k := j; k < len(*board); k += 1 {
		*board[i][k] = "."
	}

	for k := i; k < len(*board); k += 1 {
		*board[k][j] = "."
	}

	index_j := j
	for k := i; k < len(*board); k += 1 {
		if index_j == len(*board) {
			break
		}
		*board[k][index_j] = "."
		index_j += 1
	}

	index_j = j

	for k := i; k < len(*board); k += 1 {
		if index_j < 0 {
			break
		}
		*board[k][index_j] = "."
		index_j -= 1
	}
}