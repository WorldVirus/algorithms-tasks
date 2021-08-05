/** LINK: https://leetcode.com/problems/letter-case-permutation/
 *
 *  EXAMPLES:
 *  Input: "a1b2"
 *  Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
 */

function letterCasePermutation(S) {
  let answer = [];

  function upper(str, index) {
    if (index === str.length) {
      answer.push(str);
    } else {
      if (!/[0-9]/.test(S[index])) {
        str =
          str.substring(0, index) +
          str.substring(index, index + 1).toUpperCase() +
          str.substring(index + 1, S.length);
        upper(str, index + 1);

        str =
          str.substring(0, index) +
          str.substring(index, index + 1).toLowerCase() +
          str.substring(index + 1, S.length);
      }
      upper(str, index + 1);
    }
  }

  upper(S, 0);

  return answer;
};

console.log(letterCasePermutation("a1b2"))