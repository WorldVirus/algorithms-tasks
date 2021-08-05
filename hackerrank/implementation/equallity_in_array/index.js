/** LINK: https://www.hackerrank.com/challenges/equality-in-a-array/problem
 * 
 *  DESCRIPTION: Complete the equalizeArray function in the editor below. 
 * It must return an integer that denotes the minimum number of deletions required.
 * 
 *  EXAMPLES: 
 * 
 *  Sample Input

    5
    3 3 2 1 3

    Sample Output

    2   

 * 
 */

function equalizeArray(arr) {
    let counter = 1;
    for (let i = 0; i < arr.length; ++i) { 
        let bufferCounter = 1;
        for (let j = i + 1; j < arr.length; ++j) { 
            if (arr[i] === arr[j])
                ++bufferCounter;
        }

        if (counter < bufferCounter)
            counter = bufferCounter
    }

    return counter !== 0 ? arr.length - counter : arr.length - 1;
}

let arr = [3,3,2,1,3];

console.log(equalizeArray(arr))
