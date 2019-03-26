/**LINK: https://www.hackerrank.com/challenges/chocolate-feast/problem
 * 
 * DESCRIPTION:
 * Little Bobby loves chocolate. He frequently goes to his favorite  store, Penny Auntie, to buy them. They are having a promotion at Penny Auntie. If Bobby saves enough wrappers, he can turn them in for a free chocolate.

For example, Bobby has  to spend on bars of chocolate that cost  each. He can turn in  wrappers to receive another bar. Initially, he buys  bars and has  wrappers after eating them. He turns in  of them, leaving him with , for more bars. After eating those two, he has  wrappers, turns in  leaving him with  wrapper and his new bar. Once he eats that one, he has  wrappers and turns them in for another bar. After eating that one, he only has  wrapper, and his feast ends. Overall, he has eaten  bars

EXAMPLE:
Sample Input

3
10 2 5
12 4 4
6 2 2

Sample Output

6
3
5
 */

function chocolateFeast(n, c, m) {
  let decAnswer = Math.floor(n / c);
  let wrappers = decAnswer;
  while (wrappers >= m) {
      decAnswer += Math.floor(wrappers/m);
      wrappers = Math.floor(wrappers/m) + wrappers % m
  }
  return decAnswer
}
chocolateFeast(10, 2, 5);

