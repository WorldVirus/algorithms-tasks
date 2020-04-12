/** LINK: https://leetcode.com/problems/generate-parentheses
 * 
 *  EXAMPLES:
 *  Input: S = "ab#c", T = "ad#c"
 *  Output: true
 */

function backspaceCompare (S, T) {
    function comparator(str){
    let index = 0;
    while(index < str.length){
        if(str[index] === '#'){
            if(!index){
                str=str.substring(1,str.length);
            } else {
                copStr = index - 1 > 0 ? str.substring(0, index - 1): '';
                str = copStr + str.substring(index + 1, str.length);
                index -= 2;
            } 
        }else{
          ++index;
        }
    }
        
        return str;
    }

    return comparator(S) === comparator(T);
};

console.log(backspaceCompare("ab#c", "ad#c"));