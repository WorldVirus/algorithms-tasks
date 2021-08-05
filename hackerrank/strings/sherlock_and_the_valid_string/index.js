/** LINK: https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem
 * 
 *  DESCRIPTION: Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just  character at  index in the string, and the remaining characters will occur the same number of times
 * 
 *  EXAMPLES: 
 *  
 * Sample Input 1

   aabbccddeefghi

   Sample Output 1

    NO

    //diferent cases for example when we have character length 1 
 */

function isValid(s) {
    let checkerObject = {};
    for (let i = 0; i < s.length; ++i)
        checkerObject[`${s[i]}`] = (checkerObject[`${s[i]}`] || 0) + 1;

    let valueArray = Object.values(checkerObject);
    let bufferDiference = -1;

    valueArray = valueArray.filter(function (item, i, ar) { return ar.indexOf(item) === i; })
    let sizeArray = valueArray.length;
    for (let i = 1; i < sizeArray; ++i) {
        if ((bufferDiference !== Math.abs(valueArray[0] - valueArray[i])) && bufferDiference !== -1) {
            return 'NO';
        } else {
            bufferDiference = Math.abs(valueArray[0] - valueArray[i]);
        }

    }

    return 'YES'
}
