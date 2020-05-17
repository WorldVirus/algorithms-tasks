// maxPower = function(s) {
//     let max = 0;
//     s = s.split("");
//     for(let i=0; i < s.length; ++i){
//         let bufVal = 1;
//         while(i < s.length && s[i] === s[i+1]){
//             ++bufVal;
//             ++i
//         }
        
//         max = Math.max(max,bufVal);
//     }
    
//     return max;
// };

// console.log(maxPower("tourist"))

function simplifiedFractions(n) {
    
    if(n===1){return [];}
    function gcd(a, b) {
        if (a === 0) 
        return b; 
     if (b == 0) 
        return a; 
    
     if (a === b) 
         return a; 
    
     if (a > b) 
         return gcd(a-b, b); 
     return gcd(a, b-a); 
}; 
    let answer = [];
    let checker = {};
    
    for(let i=1; i < n; ++i){
        for(let j=i+1; j <= n; ++j){
            let indexI = i;

            let indexJ = j;
            let valueGsd = gcd(indexI,indexJ);
            if(valueGsd > 1){
                indexI = indexI / valueGsd;
                indexJ = indexJ / valueGsd;               
            } 

        let buf = indexI + '/' + indexJ; 
            console.log(buf)
             if(!checker[buf]){
                    checker[buf] = 1;
                    answer.push(buf);
            }
        }
    }
    
    return answer;
};

console.log(simplifiedFractions(5))