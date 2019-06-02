/** LINK: https://www.hackerrank.com/challenges/recursive-digit-sum/problem
 * 
 *  DESCRIPTION:We define super digit of an integer X using the following rules: Given an integer, we need to find the super digit of the integer.If X has only 1 digit, then its super digit is X.
    Otherwise, the super digit of  is equal to the super digit of X the sum of the digits of X.
 * 
 *  EXAMPLES: 
 *  Sample Input
    148 3

    Sample Output
    3
 */

function recursionSearch(sum) {
    if (!Math.floor(sum / 10))
        return sum;
    let sumInitial = 0;
    while (true) {
        sumInitial += sum % 10;
        sum = Math.floor(sum / 10);
        if (!sum)
            break;
    }

    return recursionSearch(sumInitial);
 }

function digitSum(n, k) {

    // mathematical solution using this is lemma http://applet-magic.com/digitsummod9.htm
    // let answer = n * k % 9
    // return answer ? answer : 9;

    let counter = 0;
    let sumInitial = 0;
    while (true) {
        sumInitial += n % 10;
        n = Math.floor(n / 10);
        ++counter;
        if (!n)
            break;
    }

    if (counter === 1)
        return n;
    let calculateValue = sumInitial * k;

    return recursionSearch(calculateValue);
}
