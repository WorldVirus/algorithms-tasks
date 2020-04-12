/** NOT SUBMITTED (find all posible variations, but need remove posible variations) 
 * LINK: https://leetcode.com/problems/remove-invalid-parentheses/
 * 
 *  EXAMPLES:
 *  Input: "()())()"
 *  Output: "()()()", "(())()"
 */

function removeInvalidParentheses(s) {
    let answer = [];
    function calcP(indexO,indexC, cur, size){
        if(indexO > size - indexO || indexC > size - indexC || indexC > indexO){ return; }
        if(indexO + indexC === size){answer.push(cur);}
        calcP(indexO + 1,indexC, cur + '(', size);
        calcP(indexO,indexC + 1, cur +')', size);
    }
    
    let removeAr = [];
    let letAr = [];
    let openB = 0;
    
    for(let i = 0; i < s.length; ++i ){
        switch(s[i]){
            case '(':{
                ++openB;
                if(openB > s.length - i){
                    removeAr.push(i);
                }
                break;
            }
            case ')':{
                if(!openB){
                    removeAr.push(i);
                    break;
                }
                --openB;
                break;
            }
            default:{
              letAr.push(s[i]);
              letAr.push(i);
            }
        }
    }
    
    for(let i=0; i < removeAr.length; ++i){
         let index  = removeAr[i] - i;
        s = s.substring(0, index) + s.substring(index + 1, s.length);
    }
    console.log(s);

    answer.push(s);
    const withoutL = s.length - Math.floor(letAr.length / 2);
    calcP(0,0,"", withoutL);
    for(let i=0; i < answer.length; ++i){
        let bufV = answer[i];
        let inc = 0;
        for(let j=0; j < letAr.length; j+=2){
            let index = letAr[j+1] + inc;
            bufV =  s.substring(0, index) +  letAr[j] +s.substring(index + 1, s.length);
            ++inc;
        }
    }

    return answer;
};

console.log(removeInvalidParentheses("()())()")); 