/** LINK: https://leetcode.com/explore/interview/card/google/59/array-and-strings/3054/
 *
 *  EXAMPLES:
 *  Input: "eceba"
 *  Output: 3
 */

var lengthOfLongestSubstringTwoDistinct = function(s) {
    let start = 0;
	let checker = {};
	let max = Number.MIN_VALUE;

    for(let end = 0; end < s.length; ++end){
		if(!checker[s[end]]){
		    checker[s[end]] = 0;
        }
        ++checker[s[end]];
        let vals = Object.values(checker);
        let sumIndex = vals.length > 2 ? -1: 0; // -1
        let sum  = vals.reduce((a,b) => a + b) + sumIndex; 
        max = Math.max(max, sum); // 3
        while(Object.keys(checker).length > 2){
            --checker[s[start]]; 
            if(!checker[s[start]]){
                delete checker[s[start]];
            }
            ++start; 
        }
    }
    
	return max;
};

console.log(lengthOfLongestSubstringTwoDistinct("eceba"));