/** LINK: https://www.hackerrank.com/challenges/pairs/problem
 *  
 *  DESCRIPTION: Determine the number of pairs of array elements that have a difference equal to a target value.
 * 
 *  EXAMPLES:
 * 
 *  Sample Input

    2  
    1 5 3 4 2  

    Sample Output

    3
 * 
 */

function pairs(k, arr) {
    let counter = 0;
    let checkerObj = {};

    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; ++i)
        checkerObj[`${arr[i]}`] = (checkerObj[`${arr[i]}`] || 0) + 1;

    for (let i = arr.length - 1; i < 0; --i) {
        let bufferValue = checkerObj[`${arr[i] - k}`];
        if (bufferValue)
            counter += bufferValue;
    }

    return counter;
}

console.log(pairs(2, [1, 5, 3, 4, 2]))
