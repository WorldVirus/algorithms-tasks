/** LINK: https://www.hackerrank.com/challenges/the-power-sum/problem
 * 
 *  DESCRIPTION: Complete the powerSum function in the editor below. It should return an integer that represents the number of possible combinations.
    powerSum has the following parameter(s):
    X: the integer to sum to
    N: the integer power to raise numbers to

    EXAMPLES:
    Sample Input 
    10
    2

    Sample Output 
    1
 */

function calculation(x, n, num) {
    let value = x - Math.pow(num, n);
    if (value == 0)
        return 1;
    if (value < 0)
        return 0;

    return calculation(value, n, num + 1) +
        calculation(x, n, num + 1);
 }

function powerSum(X, N) {
    return calculation(X, N, 1);
}