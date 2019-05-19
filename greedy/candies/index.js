/** LINK: https://www.hackerrank.com/challenges/candies/problem
 * 
 *  DESCRIPTION:  Alice wants to give at least 1 candy to each child. If two children sit next to each other, then the one with the higher rating must get more candies. 
 *  Alice wants to minimize the total number of candies she must buy.
 * 
 *  EXAMPLES:
 *  Sample Input 
    3
    1
    2
    2

    Sample Output 
    4
 */

function candies(n, arr) {
    let candies = [];
    let sum = 0;
    for (let i = 0; i < n; ++i) {
        candies[i] = 1; 
    }

    for (let i = 1; i < n; ++i) {
        if (arr[i] > arr[i - 1]) {
            candies[i] += candies[i - 1];
        }
    }

    for (let i = n - 1; i >= 0; --i) {
        if (arr[i] > arr[i + 1] && candies[i] < candies[i + 1] + 1 && i !== n-1) {
            candies[i] = candies[i + 1] + 1;
        }
        sum += candies[i];
    }
    return sum;
}
