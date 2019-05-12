/** LINK: https://www.hackerrank.com/challenges/two-arrays/problem
 * 
 *  DESCRIPTION: You are given queries consisting of A,B, andk . For each query, print YES on a new line if some permutation A',B'  satisfying the relation above exists. Otherwise, print NO.
 * 
 *  EXAMPLES:
 *  Sample Input
    5
    1 2 2 1

    Sample Output
    NO
 */

function twoArrays(k, A, B) {
    A.sort((a, b) => a - b);
    let sizeA = A.length;
    let sizeB = B.length;

    for (let i = 0; i < sizeA; ++i) {
        let minPos = -1;
        let min = k;
        for (let j = 0; j < sizeB; ++j) {
            if (B[j] !== -1) {
                if (min <= A[i] + B[j]) {
                    minPos = j;
                    min = A[i] + B[j];
                }
            }
        }

        if (minPos === -1) {
            return 'NO';
        } else {
            B[minPos] = -1;
        }

    }

    return 'YES';
}
