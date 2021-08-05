/** LINK: https://www.hackerrank.com/challenges/sherlock-and-array/problem
 * 
 *  DESCRIPTION: Watson gives Sherlock an array of integers. 
 *  His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right
 * 
 *  EXAMPLES: 
 * 
 *  Sample Input
 * 
 *  1 2 3 
 *  1 2 3 3
 * 
 *  Sample Output 0

    NO
    YES
 */

function balancedSums(arr) {
    if (arr.length === 1)
        return 'YES';

    let startValue = 0;
    let tailValue = 0;
    for (let i = 1; i < arr.length - 1; ++i) {
        if (i === 1) {
            let index = i + 1;
            while (index < arr.length) {
                tailValue += arr[index]
                ++index;
            }
        } else {
            tailValue -= arr[i];
        }
        startValue += arr[i - 1]

        if (startValue === tailValue || tailValue === 0)
            return 'YES';
    }

    return 'NO';
}
