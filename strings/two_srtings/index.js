/** LINK: https://www.hackerrank.com/challenges/two-strings/problem
 * 
 *  DESCRIPTION: Вам даны две строки  и . Определите, существует ли непустая строка, которая встречается как подстрока и в A, и в B.
 * 
 *  EXAMPLES:
 * 
 *  Sample Input

    2
    hello
    world
    hi
    world

    Sample Output

    YES
    NO

 */

function twoStrings(s1, s2) {
    let checkerObj = {};

    for (let i = 0; i < s1.length; ++i)
        checkerObj[`${s1[i]}`] = '';

    for (let i = 0; i < s2.length; ++i) { 
        if (checkerObj[`${s2[i]}`] !== undefined)
            return 'YES';
    }

    return 'NO';
}
