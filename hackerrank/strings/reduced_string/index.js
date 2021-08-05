/** LINK: https://www.hackerrank.com/challenges/reduced-string/problem
 * 
 * DESCRIPTION :Complete the superReducedString function in the editor below. It should return the super reduced         string or Empty String if the final string is empty.
 * 
 * EXAMPLES: 
 * 
 * Sample Input 
 * 
 * 0
   aaabccddd

   Sample Output 0

   abd

 * 
 */

function superReducedString(s) {
    for (let i = 0; i < s.length; ++i) {
        let bufferValue = s[i];
        while (s[i] === s[i + 1] && i !== s.length) {
            bufferValue += s[i];
            ++i;
        }
    
        if (bufferValue.length > 1) {
            let deletePart = bufferValue.length % 2=== 0? bufferValue : bufferValue.substring(0, bufferValue.length-1);
            s = s.replace(deletePart, '');
            i = -1;
        }
    }

    return s;

    //alternative (probleams with some tests)
    // let checkerObj = {};

    // for (let i = 0; i < s.length; ++i) {
    //     if (checkerObj[s[i]] === undefined) {
    //         checkerObj[s[i]] = '';
    //     } else {
    //         delete checkerObj[s[i]]
    //     }
    // }

    // return Object.getOwnPropertyNames(checkerObj).length ? Object.keys(checkerObj).join('') : 'Empty String';
}
