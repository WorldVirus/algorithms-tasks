// function test(arr1, arr2, d) {
//     let answer = 0;
//     for(let i = 0; i < arr1.length; ++i){
//         let flag = true;
//         for(let j = 0; j < arr2.length; ++j){
//             if(Math.abs(arr1[i] - arr2[j]) <= d){
//                 flag = false;
//                 break;
//             }
//         }
//         if(flag){++answer;}
//     }
//     return answer;
// };

// console.log(test([4,5,8],[10,9,1,8],2))

function test(n, reservedSeats) {
    let cinemaAr = [];
    let answer = 0;
    for(let i=0; i < n; ++i){
        cinemaAr[i] = [];
        for(let j=0; j < 10; ++j){
            cinemaAr[i][j] = 0;
        }
    }
    
    for(let i=0; i < reservedSeats.length; ++i){
        let indexI = reservedSeats[i][0] - 1;
        let indexJ = reservedSeats[i][1] - 1;
        console.log(indexI,indexJ)
        cinemaAr[indexI][indexJ] = -1;
    }
    console.log(cinemaAr[1][2]);
    for(let i=0; i < n; ++i){
        if(cinemaAr[i][1] !== -1){
            let bufValue = 1;
            let index = 2;
            while( cinemaAr[i][index] !== -1 && index <= 9){
                ++bufValue;
                ++index;
            }
            answer += Math.floor(bufValue/4);
        } else if(cinemaAr[i][3] !== -1){
            let bufValue = 1;
            let index = 4;
            while( cinemaAr[i][index] !== -1 && index <= 9){
                ++bufValue;
                ++index;
            }
            answer += Math.floor(bufValue/4);
        } else if(cinemaAr[i][5] !== -1){
            let bufValue = 1;
            let index = 6;
            while( cinemaAr[i][index] !== -1 && index <= 9){
                ++bufValue;
                ++index;
            }
            answer += Math.floor(bufValue/4);
        }
    }
    
    return answer;
};

console.log(test(3,
    [[2,3]]))