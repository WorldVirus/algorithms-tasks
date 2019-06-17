/** LINK: https://www.hackerrank.com/challenges/tower-breakers-1/problem
 * 
 *  DESCRIPTION: Complete the towerBreakers function in the editor below. It should return an integer that represents the winning player.
    towerBreakers has the following paramter(s): n: an integer that represents the number of towers, m: an integer that represents the height of each tower
 * 
 *  EXAMPLES: 
 *  Sample Input
    2 2
    1 4

    Sample Output
    2
    1
 */

function towerBreakers(n, m) {
    return m == 1 || n % 2 === 0  ? 2 : 1;
}
