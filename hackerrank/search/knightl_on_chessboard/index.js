/** LINK: https://www.hackerrank.com/challenges/knightl-on-chessboard/problem
 *  
 *  DESCRIPTION:(bad) Print exactly  n-1 lines of output in which each line i (where ) contains  space-separated integers describing the minimum number of moves  must make for each respective j
 * 
 *  EXAMPLES:
 * 
 *  Sample Input 0

    5

    Sample Output 0

    4 4 2 8
    4 2 4 4
    2 4 -1 -1
    8 4 -1 1

    //algorithm at Java:  https://fizzbuzzer.com/knightl-on-a-chessboard-challenge/
 */

function bruteForser(n, i, j, r, c, flagSteps, arrSteps, count){
    flagSteps[r][c] = true;
 
    if (r == n - 1 && c == n - 1) {
        return count;
    } else {
        let rows = [r + i, r + i, r - i, r - i, r + j, r + j, r - j, r - j];
        let cols = [c + j, c - j, c + j, c - j, c + i, c - i, c + i, c - i];

        let min = Number.MAX_SAFE_INTEGER;
        for (let rc = 0; rc < 8; rc++) {
            let newRow = rows[rc];
            let newCol = cols[rc];

            if (newRow >= 0 && newCol >= 0 && newRow < n && newCol < n) {
                if (!flagSteps[newRow][newCol] || (flagSteps[newRow][newCol] && arrSteps[newRow][newCol] > count + 1)) {
                    arrSteps[newRow][newCol] = count + 1;

                    let bufferAnswer = bruteForser(n, i, j, newRow, newCol, flagSteps, arrSteps, count + 1);

                    if (bufferAnswer !== Number.MAX_SAFE_INTEGER) {
                        if (bufferAnswer < min) {
                            min = bufferAnswer;
                        }
                    }

                }
            }
        }

        return min;
    }
}
function solver(n, i, j) {
    let arrSteps = [];
    for (let i = 0; i < n; ++i) {
        arrSteps[i] = [];
        for (let j = 0; j < n; ++j) {
        }
    }
    let flagSteps = [];
    for (let i = 0; i < n; ++i) {
        flagSteps[i] = [];
        for (let j = 0; j < n; ++j) {
        }
    }
    let answerPoint = bruteForser(n, i, j, 0, 0, flagSteps, arrSteps, 0)
    return answerPoint !== Number.MAX_SAFE_INTEGER ? answerPoint : -1;

}
function knightlOnAChessboard(n) {
let finalAnswer = [];
    for (let i = 1; i < n; ++i) {
        for (let j = 1; j < n; ++j) {
            let answer = solver(n, i, j);
            console.log(answer + " ");
            finalAnswer.push(answer + " ")
        }
        console.log('\n')
    }
}

knightlOnAChessboard(5)
