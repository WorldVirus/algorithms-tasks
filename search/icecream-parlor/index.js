/** LINK: https://www.hackerrank.com/challenges/icecream-parlor/problem
 * 
 *  DESCRIPTION: For example, they have  to spend and there are flavors costing . 
 *  The two flavors costing  and meet the criteria. Using -based indexing, they are at indices  and .
 * 
 *  EXAMPLES:
 * 
 * Sample Input

    5
    1 4 5 3 2

    Sample Output

    1 4
 * 
 */

function icecreamParlor(m, arr) {
    // First Variation
    for (let i = 0; i < arr.length - 1; ++i) { 
        for (let j = i+1; j < arr.length; ++j) { 
            if (arr[i] + arr[j] === m)
                return [i+1, j+1];
        }
    }

    // Second Variation
    // let checkerObject = {};

     // for (let i = 0; i < arr.length; ++i)
     //     checkerObject[`${arr[i]}`] = i;

     // for (let i = 0; i < arr.length - 1; ++i) {
     //     if (checkerObject[`${m - arr[i]}`] !== undefined) {
     //         return [i + 1, checkerObject[`${m - arr[i]}`] + 1]
     //     }
     // }

     // Third Variation
     // arr.sort((a, b) => {
     //     return a - b;
     // })

     // let first = 0;
     // let last = arr.length - 1;

     // while (first < last) { 
     //     if (arr[first] + arr[last] === m) {
     //         return [first + 1, last + 1]
     //     } else if (arr[first] + arr[last] < m) {
     //         --last
     //     } else { 
     //         ++first
     //     }
     // }
}
