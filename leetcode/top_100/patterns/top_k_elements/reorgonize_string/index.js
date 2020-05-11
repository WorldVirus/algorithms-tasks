/** LINK: https://leetcode.com/problems/reorganize-string/
 *
 *  EXAMPLES:
 *  Input: "aab"
 *  Output: "aba"
 */

function reorganizeString(S) {
  let checker = {};
  for (let i = 0; i < S.length; ++i) {
    if (!checker[S[i]]) {
      checker[S[i]] = 0;
    }
    ++checker[S[i]];
  }

  let strSorted = Object.keys(checker).sort((a, b) => checker[a] - checker[b]);
  let answer = [""];
  let index = 1;

  for (let i = 0; i < strSorted.length; ++i) {
    let bufVal = checker[strSorted[i]];
    if (bufVal > Math.floor((S.length + 1) / 2)) {
      return "";
    }
    for (let j = 0; j < bufVal; ++j) {
      if (index >= S.length) {
        index = 0;
      }
      answer[index] = strSorted[i];
      index += 2;
    }
  }

  return answer.join("");
}

console.log(reorganizeString())