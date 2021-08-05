/** LINK: https://www.hackerrank.com/challenges/game-of-thrones/problem
 * 
 *  DESCRIPTION: Complete the gameOfThrones function below to determine whether a given string can be rearranged into a palindrome. 
 *  If it is possible, return YES, otherwise return NO.
 * 
 *  EXAMPLES: 
 *  
 *  Sample Input 0

    aaabbbb

    Sample Output 0

    YES
 */

function gameOfThrones(s) {
    let checkerObj = {};

    for (let i = 0; i < s.length; ++i)
        checkerObj[`${s[i]}`] = (checkerObj[`${s[i]}`] || 0) + 1;

    let counterOrder = 0;
    for (let key in checkerObj) { 
        if (counterOrder === 2)
            return 'NO'
        if (checkerObj[key] % 2 !== 0 || checkerObj[key] === 1)
            ++counterOrder;
    }
}
