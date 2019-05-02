/** LINK: https://www.hackerrank.com/challenges/maximizing-xor/problem
 * 
 *  DESCRIPTION: Вам даны два целых числа: L и R. Найдите, какое максимальное значение может принимать
 *  A xor B, где L <= A <= B <= R.
 * 
 *  EXAMPLES: 
 * 
 *  Sample Input 

    10
    15

    Sample Output 

    7
 * 
 */

function maximizingXor(l, r) {
    let finalMax = 0;

    if (l === r)
        return 0;

    for (let i = l; i <= r - 1; ++i) {
        for (let j = i + 1; j <= r; ++j) {
            if (i ^ j < i ^ j-1)
                break;

            let bifferValue = i^j;
            if (finalMax < bifferValue)
                finalMax = bifferValue;
            
         }
     }

    return finalMax;
}

console.log(maximizingXor(10,15))
