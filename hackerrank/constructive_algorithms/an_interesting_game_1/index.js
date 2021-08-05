/** LINK: https://www.hackerrank.com/challenges/an-interesting-game-1/problem
 * 
 *  DESCRIPTION: Andy and Bob play g games. Given the initial array for each game, find and print the name of the winner on a new line. 
 *  If Andy wins, print ANDY; if Bob wins, print BOB.
 * 
 *  EXAMPLES:
 *  Sample Input
    7 4 6 5 9

    Sample Output
    ANDY
 * 
 */

function gamingArray(arr) {
    let count = 0;
    let max = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (max < arr[i]) {
            ++count;
            max = arr[i];
         }
    }
    
    return count % 2 === 0 ? `ANDY` : `BOB`;
}
