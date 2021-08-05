/** LINK: https://www.hackerrank.com/challenges/mark-and-toys/problem
 * 
 *  DESCRIPTION: There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money.
 * 
 *  EXAMPLES: 
 *  Sample Input
    50
    1 12 5 111 200 1000 10

    Sample Output
    4
 */

function maximumToys(prices, k) {
    let counter = 0;
    let sum = 0;
    let sizeArr = prices.length;
    prices.sort((a, b) => a - b);
    for (let i = 0; i < sizeArr; ++i) {
        sum += prices[i];
        if (sum <= k) {
            ++counter;
        } else {
            break;
        }
     }

    return counter;
}
