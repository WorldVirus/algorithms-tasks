/** LINK: https://www.hackerrank.com/challenges/non-divisible-subset/problem
 * 
 * DESCRIPTION: Given a set of distinct integers, print the size of a maximal subset of  where the sum of any  numbers in  is not evenly divisible by . 
 * 
 * EXAMPLES: 
 * 
 * Sample Input

    4 3
    1 7 2 4

    Sample Output

    3
 */

function nonDivisibleSubset(k, S) {
    let checkerObj = {};

    for (let i = 0; i < S.length; ++i) {
        checkerObj[`${S[i] % k}`] = S[i] % k === 0 || checkerObj[`${S[i] % k}`] === undefined ? 1 :
            1 + checkerObj[`${S[i] % k}`];
    }

    let index = 1;
    let finalAnswewr = checkerObj['0'] || 0;

    for (let i = 1; i * 2 < k; ++i) {
        let firstSection = checkerObj[`${i}`] || 0;
        let secondSection = checkerObj[`${k - i}`] || 0;
        finalAnswewr += Math.max(firstSection, secondSection);
        ++index;
    }

    if (index * 2 === k)
        ++finalAnswewr;

    return finalAnswewr;
}

let arSecond = [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]
let arr = [1, 7, 2, 4];
let arrF = [19, 10, 12, 10, 24, 25, 22]
//console.log(nonDivisibleSubset(3,arr))
//console.log(nonDivisibleSubset(7,arSecond))
console.log(nonDivisibleSubset(4, arrF))
