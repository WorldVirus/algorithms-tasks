/** LINK: https://www.hackerrank.com/challenges/equal/problem
 *  
 *  DESCRIPTION: Christy is interning at HackerRank. One day she has to distribute some chocolates to her colleagues. She is biased towards her friends and plans to give them more than the others. 
 *  One of the program managers hears of this and tells her to make sure everyone gets the same number.
 * 
 *  EXAMPLES:
 *  Sample Input
    2 2 3 7

    Sample Output
    2
 */

function equal(arr) {
    // used algorithm from https://www.youtube.com/watch?v=rdlzz2GOcq4
    // https://en.wikipedia.org/wiki/Change-making_problem
    let min = arr[0];
    for (let i = 0; i < arr.length; ++i) {
        if (min > arr[i])
            min = arr[i];
     }
  
    let answer = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < 5; ++i) {
        let bufferValue = 0;
        for (let j = 0; j < arr.length; ++j) {
            let difference = arr[j] - (min - i);
            bufferValue += Math.floor(difference / 5) + Math.floor(difference % 5 / 2) + difference % 5 % 2;
        }
        answer = Math.min(answer, bufferValue);
    }

    return answer;
}
