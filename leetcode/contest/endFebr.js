// function endFebr(arr){
//     function binRepresent(value){
//         let count = 0;
//         while (value !== 0)
//         {
//             value = value & (value-1);
//             ++count;
//         }

//         return count;
//     }

//     arr.sort((a,b) => {
//         let binA = binRepresent(a);
//         let binB = binRepresent(b);
//         if(binA >= binB){
//             return a - b;
//         } 
//         return b - a;
//     })

//     return arr;
// }

// console.log(endFebr([[2,3,5,7,11,13,17,19]]))
function endFebr(s){
        let numberA = 0;
        let numberB = 0;
        let numberC = 0;
        let answer = (s.length * (s.length + 1)) / 2; 
      
        for (let i = 0; i < s.length; i++) { 
            if (s[i] === 'a') { 
                numberA = i + 1; 
                answer -= Math.min(numberB, numberC); 
            } 
    
            else if (s[i] === 'b') { 
                numberB = i + 1; 
                answer -= Math.min(numberA, numberC); 
            } 
            else { 
                numberC = i + 1; 
                answer -= Math.min(numberA, numberB); 
            } 
        } 
      
        return answer - 1;
}

console.log(endFebr("abc"));