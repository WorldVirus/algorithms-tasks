/** LINK: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 *  EXAMPLES:
 *  Input:  "abcabcbb"
 *  Output:  3
 */

function lengthOfLongestSubstring(s) {

    let chekcer = {};
    let answer = 0, i = 0, j = 0;
    
    while (i < s.length && j < s.length) {
        if (!chekcer[s[j]]){
            chekcer[s[j]];
            ++j;
            answer = Math.max(answer, j - i);
        }
        else {
            delete checker[s[i]];
            ++i;
        }
    }

    return answer;

    // optimze
//   let checker = {};
//   let index = 0;
//   let answer = 0;

//   for (let i = 0; i < s.length; ++i) {
//     if (checker[s[i]]) {
//       index = Math.max(index, checker[s[i]]);
//     }
//     answer = Math.max(answer, i - index + 1);
//     checker[s[i]] = i + 1;
//   }

//   return answer;
}

console.log(reverseLinkedList("abcabcbb"));
