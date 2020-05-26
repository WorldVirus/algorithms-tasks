/** LINK: https://leetcode.com/problems/repeated-substring-pattern/
 * 
 *  EXAMPLES:
 *  Input: "abcabcabcabc"
 *  Output: true
 */

function repeatedSubstringPattern (s) { 
    // Knuth-Morris Algo
    let size = s.length;
    let arr = [];
    for(let i=0; i < size; ++i){arr[i] = 0;}
    
    for(let i=1; i < size; ++i){
        let j = arr[i-1];
        
        while(j > 0 && s[i] !== s[j]){
            j = arr[j-1];
        }
        
        if(s[i] === s[j]){
            ++j;
        }
        
        arr[i] = j;
    }
    
    let last  = arr[size - 1];

    return last && size % (size - last) === 0;
};

console.log(repeatedSubstringPattern("abcabcabcabc"))