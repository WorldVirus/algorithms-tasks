/** NOT SUBMITTED 
 * LINK: https://leetcode.com/problems/permutation-in-string/
 * 
 *  EXAMPLES:
 *  Input: s1 = "ab" s2 = "eidbaooo"
 *  Output: "True"
 */
function checkInclusion (s1, s2) {
    if(s1.length > s2.length){return false;}
    
    let arFirst = [];
    let arSecond = [];
 
    for(let i=0; i < s1.length; ++i){
        arFirst[s1[i] - 'a']++;
        arSecond[s2[i] - 'a']++;
    }
    function comparator(){
        for(let i=0; i < 26; ++i){
            if(arFirst[i] !== arSecond[i]){return false;}
        }
        
        return true;
    }
    
    for(let i=0; i < s2.length - s1.length;++i){
        if(comparator()){return true;}
        arSecond[s2[i + s1.length] - 'a']++;
        arSecond[s2[i] - 'a']--;
    }
    
    return comparator();
};

console.log(checkInclusion("ab","eidbaooo"))