/** LINK: https://leetcode.com/problems/surrounded-regions/
 *
 *  EXAMPLES:
 *  Input: [["X","O","X"],["O","X","O"],["X","O","X"]]
 *  Output: [["X","O","X"],["O","X","O"],["X","O","X"]]
 */

var solve = function (board) {
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      if (board[i][j] === "O") {
        let flag = true;
        let queue = [];
        let visitedAr = [];

        queue.push({ row: i, col: j });
        while (queue.length) {
          let cur = queue.shift();
          board[cur.row][cur.col] = "S";
          if (flag) {
            visitedAr.push({ row: cur.row, col: cur.col });
          }
          if (
            cur.row === board.length - 1 ||
            cur.row === 0 ||
            cur.col === board[0].length - 1 ||
            cur.col === 0
          ) {
            flag = false;
          }
          if (
            cur.row + 1 < board.length &&
            (board[cur.row + 1][cur.col] === "O" ||
              board[cur.row + 1][cur.col] === "S")
          ) {
            queue.push({ row: cur.row + 1, col: cur.col });
          }
          if (
            cur.col + 1 < board.length &&
            (board[cur.row][cur.col + 1] === "O" ||
              board[cur.row][cur.col + 1] === "S")
          ) {
            queue.push({ row: cur.row, col: cur.col + 1 });
          }
        }

        if (flag) {
          for (let k = 0; k < visitedAr.length; ++k) {
            let buf = visitedAr[k];
            board[buf.row][buf.col] = "X";
          }
        }
      }
    }
  }
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      if (board[i][j] === "S") {
        board[i][j] = "O";
      }
    }
  }
};

console.log(solve([["X","O","X"],["O","X","O"],["X","O","X"]]))