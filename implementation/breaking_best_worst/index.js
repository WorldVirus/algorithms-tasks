/** LINK: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
 * 
 *  DESCRIPTION: Given Maria's scores for a season, find and print the number of times she breaks her records for most and least points scored during the season.
 * 
 *  EXAMPLES: 
 *  
 *  Sample Input 0

    9
    10 5 20 20 4 5 2 25 1

    Sample Output 0

    2 4
 */

function breakingRecords(scores) {
    let bestCounter = 0;
    let worstCounter = 0;

    let max = scores[0];
    let min = scores[0];

    for (let i = 1; i < scores.length; ++i) {

        if (scores[i] > max) {
            ++bestCounter;
            max = scores[i];
        }

        if (scores[i] < min) {
            ++worstCounter;
            min = scores[i];
        }
    }
    
    return [bestCounter, worstCounter]
}

let arr = [3,4,21,36,10,28,35,5,24,42];

console.log(breakingRecords(arr));
