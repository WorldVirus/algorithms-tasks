// function kidsWithCandies(candies, extraCandies) {
//     let max = 0;
//     let answer = [];
//     for(let i=0; i < candies.length; ++i){
//         max = Math.max(max, candies[i]);
//     }
    
//     for(let i=0; i < candies.length; ++i){
//         if(candies[i] + extraCandies >= max){answer.push(true);}
//         else{answer.push(false)}
//     }
    
//     return answer;
// };

// console.log(kidsWithCandies([2,3,5,1,3],3));

function checkIfCanBreak(s1, s2) {
    let flag = true;
    for(let i=0; i < s1.length; ++i){
        if(s1[i].charCodeAt() < s2[i].charCodeAt()){
            flag = false;
            break;
        }
    }
    
    if(flag){return true;}
    
    let firstAr = [];
    let secondAr = [];
    function permutation(str, arr, index){
        if(index === s1.length - 1){arr.push(str.join(''));}
        else{
        for(let i=index; i <= str.length - 1; ++i){
            let buf = str[index];
            str[index] = str[i];
            str[i] = buf;
            permutation(str, arr, index +1)
            let tmp = str[index];
            str[index] = str[i];
            str[i] = tmp;

        }
    }
    }
    
    let bufSw = s1.split(''); 
    let bufSec = s2.split(''); 

    permutation(bufSw, firstAr,0);
    permutation(bufSec, secondAr,0);

    for(let i=0; i < firstAr.length; ++i){
        for(let j=0; j < secondAr.length; ++j){
        let flag = true;
        let bufF = firstAr[i];
        let bufS = secondAr[j];

        for(let k=0; k < bufF.length; ++k){
            if(bufF[k].charCodeAt() < bufS[k].charCodeAt()){
                flag = false;
                break;
            }
        }

        if(flag){return true;}
        }
    }

    for(let i=0; i < secondAr.length; ++i){
        for(let j=0; j < firstAr.length; ++j){
        let flag = true;
        let bufF = firstAr[i];
        let bufS = secondAr[j];

        for(let k=0; k < bufF.length; ++k){
            if(bufF[k].charCodeAt() > bufS[k].charCodeAt()){
                flag = false;
                break;
            }
        }

        if(flag){return true;}
        }
    }
    return false;
};

console.log(checkIfCanBreak("leetcodee","interview"));