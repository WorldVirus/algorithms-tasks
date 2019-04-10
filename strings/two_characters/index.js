/** LINK: https://www.hackerrank.com/challenges/two-characters/problem
 * 
 *  DESCRIPTION: Given a string , convert it to the longest possible string  made up only of alternating characters. Print the length of string  on a new line. 
 *  If no string  can be formed, print  instead.
 * 
 *  EXAMPLES: 
 * 
 *  Sample Input

    10
    beabeefeab

    Sample Output

    5

    //I think it is not optimal desigion 
 */

function alternate(s) {
    let containerValue = [];
    let counterValue = [];
    let uniqeSieze = s.split('').filter(function (item, i, ar) { return ar.indexOf(item) === i; });
    let positionObject = {};

    for (let i = 0; i < uniqeSieze.length; ++i)
        positionObject[uniqeSieze[i]] = i;

    for (let i = 0; i < uniqeSieze.length; ++i) {
        containerValue[i] = []
        for (let j = 0; j < uniqeSieze.length; ++j) {
            containerValue[i][j] = '';
        }
    }

    for (let i = 0; i < uniqeSieze.length; ++i) {
        counterValue[i] = [];
        for (let j = 0; j < uniqeSieze.length; ++j) {
            counterValue[i][j] = 0;
        }
    }

    for (let i = 0; i < s.length; ++i) {
        let index = positionObject[s[i]];
        for (let row = 0; row < uniqeSieze.length; ++row) {
            if (containerValue[row][index] === s[i])
                counterValue[row][index] = counterValue * (-1);
            if (counterValue[row][index] > -1) {
                containerValue[row][index] = s[i];
                ++counterValue[row][index];
            }
        }

        for (let column = 0; column < uniqeSieze.length; ++column) {

            if (containerValue[index][column] === s[i])
                counterValue[index][column] = counterValue * (-1);
            if (counterValue[index][column] > -1) {
                containerValue[index][column] = s[i];
                ++counterValue[index][column];
            }
        }

    }

    let max = 0;
    for (let column = 0; column < uniqeSieze.length; ++column) {
        for (let row = 0; row < uniqeSieze.length; ++row) {

            if (max < counterValue[row][column])
                max = counterValue[row][column];
        }
    }

    return max;
}

console.log(alternate('beabeefeab'));
