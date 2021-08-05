/** LINK: https://www.hackerrank.com/challenges/the-love-letter-mystery/problem
 * 
 *  DESCRIPTION: Найдите минимальное количество операций для превращения слова в палиндром
 * 
 *  EXAMPLES: 
 *  
 *  Sample Input:
 * 
    abcd

    Sample Output:
    
    2
 * 
 */

function theLoveLetterMystery(s) {
    let finalAnswer = 0;
    let first = 0;
    let last = s.length - 1;

    while (first < last) {
        if (s[first] !== s[last]) {
            let differenceSymbols = s[first] > s[last] ? s[first].charCodeAt() - s[last].charCodeAt() :
                s[last].charCodeAt() - s[last].charCodeAt();
            finalAnswer += differenceSymbols;
        }
        ++first;
        --last;
    }

    return finalAnswer;
}

console.log(theLoveLetterMystery('abc'))
