/** LINK: https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem
 *  
 *  DESCRIPTION: Вам предоставляется строка . Найдите количество неупорядоченных анаграммных пар подстрок.
 * 
 *  EXAMPLE: 
 * 
 *  Sample Input

    abba
    abcd

    Sample Output 0

    4
    0
 */

function sherlockAndAnagrams(s) {
    let checkerObj = {};
    let counter = 0;

    for(let i = 0; i < s.length; ++i){
        let bufferCharacter = [];
        for(let j = i; j < s.length; ++j){
            bufferCharacter.push(s[j])
            bufferCharacter.sort(function (a, b) {
                return (a).localeCompare(b);
            })
            let bufferSubstring = bufferCharacter.join('')
            checkerObj[`${bufferSubstring}`] = (checkerObj[`${bufferSubstring}`] || 0 ) + 1;
        }
    }

    for(let key in checkerObj){
        counter += (checkerObj[key]*(checkerObj[key]-1))/2 // https://en.wikipedia.org/wiki/Combination
    }

    return counter;
}

console.log(sherlockAndAnagrams('ifailuhkqq'))
