/** LINK: https://www.hackerrank.com/challenges/a-chessboard-game-1/problem
 * 
 *  DESCRIPTION: Beginning with player 1, the players alternate turns. The first player who is unable to make a move loses the game
 * 
 *  EXAMPLES: 
 *  Sample Input
    5 2
    5 3
    8 8

    Sample Output
    Second
    First
    First
 */

function chessboardGame(x, y) {
    // https://www.hackerrank.com/challenges/a-chessboard-game-1/forum/comments/145038
    x = x % 4;
    y = y % 4;
    if ((y == 0) || (y == 3) || (x == 0) || (x == 3)) return "First";

    return "Second";
}
