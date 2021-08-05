/** LINK: https://www.hackerrank.com/challenges/sherlock-and-the-beast/problem
 *  
 *  DESCRIPTION: Complete the decentNumber function in the editor below. It should print the decent number for the given length, or -1 if a decent number of that length cannot be formed.
 * 
 *  EXAMPLES: 
 * 
 *  Sample Input
    1
    3
    5
    11

    Sample Output

    -1
    555
    33333
    55555533333
 */

function decentNumber(n) {
    //probleam with 'repeat' function
    if (n % 3 === 0 || n % 5 === 0)
        return n % 3 === 0 ? parseInt('5'.repeat(n)) : parseInt('3'.repeat(n));

    let counterTaker = 0;
    let coppyN = n;
    while (coppyN >2 ) {
        coppyN -= 5;
        ++counterTaker;
        if (coppyN % 3 === 0)
            return parseInt('5'.repeat(coppyN) + '3'.repeat(counterTaker*5));
    }

    return -1;
}
