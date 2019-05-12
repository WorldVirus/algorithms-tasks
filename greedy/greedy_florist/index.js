/** LINK: https://www.hackerrank.com/challenges/greedy-florist/problem
 *  
 *  DESCRIPTION: A group of friends want to buy a bouquet of flowers. 
 *  The florist wants to maximize his number of new customers and the money he makes. To do this, he decides he'll multiply the price of each flower by the number of that customer's previously purchased flowers plus 
 * 
 *  EXAMPLES:
 *  Sample Input 
    3
    1 3 5 7 9

    Sample Output 2
    29
 */

function getMinimumCost(k, c) {
    let sizeArr = c.length;
    if (k === sizeArr)
        return c.reduce((previous, current) => previous + current);

    c.sort((a, b) => a - b);
    let sum = 0;

    let coefficientArr = [100];
    for (let i = 0; i < 100; ++i)
        coefficientArr[i] = 0;

    for (let i = sizeArr - 1; i >= 0; --i) {
        sum += c[i] * (coefficientArr[i % k] + 1);
        ++coefficientArr[i % k];
    }

    return sum;
}
