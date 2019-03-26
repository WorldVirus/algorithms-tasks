/**LINK: https://www.hackerrank.com/challenges/drawing-book/problem
 * DESCRIPTION:Complete the pageCount function in the editor below. It should return the minimum number of pages Brie must turn.
pageCount has the following parameter(s):
n: the number of pages in the book
p: the page number to turn to
 * 
 * EXAMPLE:
    Sample Input
    6
    2

    Sample Output 0
    1

    Sample Input 1
    5
    4

    Sample Output 1
    0

    EDITORIAL: https://www.hackerrank.com/challenges/drawing-book/editorial
 */

function pageCount(n, p) {
    let firstMiddle=Math.floor( p / 2);
    let secondMiddle;
    if(n % 2 === 0) {secondMiddle = Math.floor((n - p +1)/2);} 
    else {secondMiddle = Math.floor((n - p)/2)};
    return Math.min(firstMiddle,secondMiddle)
}
console.log(pageCount(5, 4))