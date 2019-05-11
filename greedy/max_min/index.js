/** LINK: https://www.hackerrank.com/challenges/angry-children/problem
 *  
 *  DESCRIPTION: You will be given a list of integers,arr, and a single integer k. You must create an array of length k from elements of arr such that its unfairness is minimized. Call that array subarr.
 *  Unfairness of an array is calculated as
 * 
 *  EXAMPLES:
 *  Sample Input 
    2
    1
    2
    1
    2
    1 

    Sample Output
    0
 */

function maxMin(k, arr) {
    let sizeArr = arr.length - 1;
    arr.sort((a, b) => a - b);

    if (sizeArr + 1 === k)
        return arr[sizeArr] - a[0];

    let min = 0;
    let index = 0;
    let maxSubArrSize = sizeArr + 1 - k;
    while (index <= maxSubArrSize) {
        let bufferValue = arr[index + k-1] - arr[index];
        if (!bufferValue)
            return 0;
        if (min > bufferValue || !min)
            min = bufferValue;
        ++index;
    }

    return min;
}
