/** LINK: https://leetcode.com/problems/sort-characters-by-frequency/
 *
 *  EXAMPLES:
 *  Input: "Aabb"
 *  Output: "bbAa"
 */

function frequencySort(s) {
  let checker = {};

  for (let i = 0; i < s.length; ++i) {
    if (!checker[s[i]]) {
      checker[s[i]] = 0;
    }
    ++checker[s[i]];
  }
  
  let sortedStr = Object.keys(checker)
    .sort((a, b) => checker[b] - checker[a]);
  let answer = "";

  for (let i = 0; i < sortedStr.length; ++i) {
    let index = checker[sortedStr[i]]; 
    let buf = sortedStr[i].repeat(index);
    answer += buf;
  }

  return answer;
}

console.log(frequencySort("Aabb"))