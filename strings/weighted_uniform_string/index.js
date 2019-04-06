/** LINK: https://www.hackerrank.com/challenges/weighted-uniform-string/problem
 * 
 *  DESCRIPTION: Given a string, , let  be the set of weights for all possible uniform contiguous substrings of string . You have to answer queries, where each query  consists of a single integer, . 
 *  For each query, print Yes on a new line if ; otherwise, print No instead.
 * 
 *  EXAMPLES: 
 * 
 *  Sample Input 1

    aaabbbbcccddd
    5
    9
    7
    8
    12
    5

    Sample Output 1

    Yes
    No
    Yes
    Yes
    No
 */

function weightedUniformStrings(s, queries) {
    let answerArray = [];
    const difference = 96;
    let checkerObj = {};
    
    for (let i = 0; i !== queries.length; ++i)
        checkerObj[`${queries[i]}`] = '';

    for (let i = 0; i !== s.length; ++i) {
        let posValue = s[i].charCodeAt() - difference;
        let bufferCounter = posValue;

        if (checkerObj[`${bufferCounter}`] !== undefined)
            checkerObj[`${bufferCounter}`] = 'Yes';

        while (s[i] === s[i + 1] && i !== s.length) {
            ++i;
            bufferCounter += posValue;

            if (checkerObj[`${bufferCounter}`] !== undefined)
                checkerObj[`${bufferCounter}`] = 'Yes';
        }
    }

    for (let i = 0; i !== queries.length; ++i) {
        let answerElement = checkerObj[`${queries[i]}`] === 'Yes' ? 'Yes' : 'No';
        answerArray.push(answerElement);
    }

    return answerArray;
}

console.log(weightedUniformStrings('aaabbbbcccddd',[ 9, 7, 8, 12, 5 ]))
