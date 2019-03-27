/*LINK:https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
 * 
 * DESCRIPTION: Given a range of numbered days,  and a number , determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where  is evenly divisible by . If a day's value is a beautiful number, it is a beautiful day. Print the number of beautiful days in the range.
 * 
 * EXAMPLES:
 * Sample Input
 * 
    20 23 6

    Sample Output

    2
 */
function reverseNumberChecker(i, j, k) {
    let counter = 0;
    for (let index = i; index <= j; ++index) {
        var revNumber = 0;
        let currentNumber = index;
        while (currentNumber > 0) {
            revNumber = (revNumber * 10) + (currentNumber % 10);
            currentNumber = Math.floor(currentNumber / 10);
        }
        if (((revNumber - index) / k) % 1 === 0)++counter;
    }
    return counter;
}

console.log(reverseNumberChecker(20,23,6));
