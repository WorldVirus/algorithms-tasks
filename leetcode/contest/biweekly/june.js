// var finalPrices = function (prices) {
//   for (let i = 0; i < prices.length; ++i) {
//     for (let j = i + 1; j < prices.length; ++j) {
//       if (prices[j] <= prices[i]) {
//         prices[i] -= prices[j];
//         break;
//       }
//     }
//   }

//   return prices;
// };

// console.log(finalPrices([10,1,1,6]))

// /**
//  * @param {number[][]} rectangle
//  */
// var SubrectangleQueries = function(rectangle) {
//     this.matrix = [];
    
//     for(let i=0; i < rectangle.length; ++i){
//         this.matrix[i] = [];
//         for(let j=0; j < rectangle[0].length; ++j){
//             this.matrix[i][j] = rectangle[i][j];
//         }
//     }
// };

// /** 
//  * @param {number} row1 
//  * @param {number} col1 
//  * @param {number} row2 
//  * @param {number} col2 
//  * @param {number} newValue
//  * @return {void}
//  */
// SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
//     for(let i=row1; i <= row2; ++i){
//         for(let j= col1; j <= col2; ++j){
//             this.matrix[i][j] = newValue;
//         }
//     }
// };

// /** 
//  * @param {number} row 
//  * @param {number} col
//  * @return {number}
//  */
// SubrectangleQueries.prototype.getValue = function(row, col) {
//     return this.matrix[row][col];
// };

// /** 
//  * Your SubrectangleQueries object will be instantiated and called as such:
//  * var obj = new SubrectangleQueries(rectangle)
//  * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
//  * var param_2 = obj.getValue(row,col)
//  */

var minSumOfLengths = function(arr, target) {
    let checker = [];
    let last = -1;

    for(let i=0; i < arr.length; ++i){
        let cur = 0;
        for(let j=i; j < arr.length; ++j){
            cur += arr[j];

            if(cur === target){

                if(last === -1){
                    checker.push(j-i + 1);
                    last = j;
                } else if(i <= last){
                    let size = checker[checker.length -1].length;
                    if(size > j-i + 1){
                        last = j;
                        checker.pop();
                        checker.push(j-i+1);
                    } 
                } else{
                    checker.push(j-i+1);
                }
                break;
            } else if(cur > target){break;}
            
        }
    }
    
    if(checker.length < 2){return -1;}
    checker.sort((a,b) => a-b);

    return checker[0] + checker[1]; 
};

console.log(minSumOfLengths([3,1,1,1,5,1,2,1],3))