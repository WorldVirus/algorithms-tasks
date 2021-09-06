/** LINK: https://leetcode.com/problems/group-anagrams
 * 
 *  EXAMPLES:
 *  Input: strs = ["eat","tea","tan","ate","nat","bat"]
 *  Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
 */

function groupAnagrams(strs) {
    let answer = {};
    for(let i = 0; i < strs.length; ++i){
        let bufferValue = strs[i].split("").sort().join("");
        if(!answer[bufferValue]){answer[bufferValue] = []}
        answer[bufferValue].push(strs[i]);
    }
    return Object.values(answer);
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))