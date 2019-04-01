/** LINK: https://www.hackerrank.com/challenges/between-two-sets/problem
 * DESCRIPTION: You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:
The elements of the first array are all factors of the integer being considered
The integer being considered is a factor of all elements of the second array

    EXAMPLES: 
    
    Sample Input

    2 3
    2 4
    16 32 96

    Sample Output

    3
 */

function getTotalX(a, b) {
    let counter = 0;
    for (let i = a[a.length-1]; i <= b[0]; ++i) {
        let flag = false;
        for (let j = 0; j < a.length; ++j) {
            if (i % a[j] !== 0) {
                flag = true
                break;
            }
        }
        for (let j = 0; j < b.length; ++j) {
            if (b[j] % i !== 0) {
                flag = true
                break;
            }
        }

        if (!flag)
            ++counter;
    }
    
    return counter;
}

let first = [2,4];
let second=[16,32,96];

console.log(getTotalX(first,second))