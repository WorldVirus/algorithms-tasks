/** LINK: https://leetcode.com/problems/word-search
 *
 *  EXAMPLES:
 *  Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 *  Output: true
 */

function wordSearch(board, word) {
  let sizeColumn = board[0].length;
  let sizeRow = board.length;

  function dfsWithSteroids(indexRow, indexColumn, index) {
    if (
      indexRow >= sizeRow ||
      indexRow < 0 ||
      indexColumn >= sizeColumn ||
      indexColumn < 0
    ) {
      return false;
    }

    if (word[index] === board[indexRow][indexColumn]) {
      let buffer = board[indexRow][indexColumn];
      board[indexRow][indexColumn] = "#";
      if (index === word.length - 1) {
        return true;
      } else if (
        dfsWithSteroids(indexRow + 1, indexColumn, index + 1) ||
        dfsWithSteroids(indexRow - 1, indexColumn, index + 1) ||
        dfsWithSteroids(indexRow, indexColumn + 1, index + 1) ||
        dfsWithSteroids(indexRow, indexColumn - 1, index + 1)
      ) {
        return true;
      }
      board[indexRow][indexColumn] = buffer;
    }

    return false;
  }

  for (let i = 0; i < sizeRow; ++i) {
    for (let j = 0; j < sizeColumn; ++j) {
      if (dfsWithSteroids(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}

console.log(
  wordSearch(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"]
    ],
    "ABCCED"
  )
);