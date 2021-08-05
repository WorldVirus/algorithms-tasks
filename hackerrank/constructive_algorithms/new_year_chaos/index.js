/** LINK: https://www.hackerrank.com/challenges/new-year-chaos/problem
 * 
 *  DESCRIPTION: Complete the function minimumBribes in the editor below. It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.
    minimumBribes has the following parameter(s): q

    EXAMPLES: 
    Sample Input
    2 1 5 3 4
    2 5 1 3 4

    Sample Output
    3
    Too chaotic
 * 
 */

function minimumBribes(q) {
    // more info in discussions of task
    let answer = 0;

    for (let i = q.length - 1; i >= 0; --i) {
        if (q[i] - i - 1 > 2) {
            console.log('Too chaotic')
            return ;
         }
        for (let j = Math.max(0, q[i] - 2); j < i; ++j)
            if (q[j] > q[i]) ++answer;
    }

    console.log(answer);
}
