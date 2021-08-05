/** LINK: https://leetcode.com/problems/letter-combinations-of-a-phone-number
 * 
 *  EXAMPLES:
 *  Input: digits = "23"
 *  Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 */

function letterCombinations (digits) {
    if(!digits.length){return[];}
    let outputArr = [];
    let checkerObj = {
        '2':'abc',
        "3": "def",
        "4":"ghi",
        "5": "jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz"
    }
    
    function settingOutputArr(currentStr,output){
        if(!output.length){
           outputArr.push(currentStr);
        } else{
            let bufferrArr = checkerObj[output[0]];
            for(let i = 0; i < bufferrArr.length; ++i){
                settingOutputArr(currentStr + bufferrArr[i], output.substring(1))
            }
        }
    }  
      
      settingOutputArr("",digits);
      return outputArr;
}

console.log(letterCombinations("23"));