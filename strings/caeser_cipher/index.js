/** LINK: https://www.hackerrank.com/challenges/caesar-cipher-1/problem
 * 
 *  DESCRIPTION: Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
 *  In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
 * 
    EXAMPLES:

    Sample Input

    11
    middle-Outz
    2

    Sample Output

    okffng-Qwvb
 */

function caesarCipher(s, k) {
    return s.split('').map((item) => {
        if (/[A-z]/.test(item)) { 
            let answerCharacter = 0;
            if(item.charCodeAt() + k > 'z'.charCodeAt() && /[a-z]/.test(item)) {
                let difference = ((item.charCodeAt()-96)+k) % ('z'.charCodeAt()-96)
                answerCharacter = difference === 0 ? 'z'.charCodeAt(): difference + 'a'.charCodeAt()-1
            } else if(item.charCodeAt() + k > 'Z'.charCodeAt() && /[A-Z]/.test(item)){
                let difference =  ((item.charCodeAt()-64)+k) % ('Z'.charCodeAt()-64)
                answerCharacter =  difference === 0 ? 'Z'.charCodeAt(): difference  + 'A'.charCodeAt()-1
            }
            return  answerCharacter === 0 ? String.fromCharCode(item.charCodeAt() + k): String.fromCharCode(answerCharacter); 
        } else {
            return item
        }
    }).join('')
}

console.log(caesarCipher('159357lcfd',98))
