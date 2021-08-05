/**LINK: https://www.hackerrank.com/challenges/apple-and-orange/problem
 * 
 * DESCRIPTION: Given the value of  for  apples and  oranges, determine how many apples and oranges will fall on        Sam's house (i.e., in the inclusive range )?
 * 
 * EXAMPLES: 
 * 
 * Sample Input 0

    7 11
    5 15
    3 2
    -2 2 1
    5 -6
 * 
 * Sample Output 0

    1
    1
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let counterAp = 0;
    let counterOr = 0;

    for (let i = 0; i < apples.length; ++i) { 
        if (apples[i] + a >= s && apples[i] + a <= t)
            ++counterAp;
    }

    for (let i = 0; i < oranges.length; ++i) {
        if (oranges[i] + b >= s && oranges[i] + b <= t)
            ++counterOr;
    }
    
    console.log(counterAp)
    console.log(counterOr)
}
