/**LINK: https://www.hackerrank.com/challenges/magic-square-forming/problem
 * 
 * DESCRIPTION: We define a magic square to be an  matrix of distinct positive integers from  to  where the sum of any row, column, or diagonal of length  is always equal to the same number: the magic constant.
You will be given a  matrix  of integers in the inclusive range . We can convert any digit  to any other digit  in the range  at cost of . Given , convert it into a magic square at minimal cost. Print this cost on a new line.

    EXAMPLES: 

    Sample Input 0

    4 9 2
    3 5 7
    8 1 5

    Sample Output 0

    1
 * 
 */

function formingMagicSquare(s) {
    let counter = 9;
    let bruteObject = {
        '1':[[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        '2': [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        '3': [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        '4': [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        '5': [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        '6': [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        '7': [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        '8': [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
    }
    for (let key in bruteObject) { 
        let bufferCounter = 0; 
        let currentArray = bruteObject[key];
        for (let i = 0; i < 3; i++) { 
            for (let j = 0; j < 3; j++) { 
                if (s[i][j] !== currentArray[i][j]) 
                bufferCounter+=Math.abs(s[i][j] - currentArray[i][j]); 
            } 
        } 
        if (bufferCounter < counter) 
        counter = bufferCounter; 
    } 

    return counter; 
}

let arr =  [[4,8,2],
            [4,5,7],
            [6,1,6]]

console.log(formingMagicSquare(arr));
