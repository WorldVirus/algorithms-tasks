/** LINK: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3306/
 * 
 *  EXAMPLES:
 *  Input: [[0,0,0,1],[0,0,1,1],[0,1,1,1]]
 *  Output: 1
 */

function leftMostColumnWithOne(binaryMatrix) {
    let ar = binaryMatrix.dimensions();
    let row = 0;
    let col = 0;
    let right = ar[1];
    while(row < ar[0]){
        let left = 0;
        while(left < right){
            let mid = left + Math.floor((right - left)/2); // let mid = Math.floor((right + left)/2);
            if(binaryMatrix.get(row,mid)){right = mid;}
            else{left = mid + 1;}
        }
        col = left;
        ++row;
    }
    
    return col !== ar[1] ? col: -1;
};

console.log(leftMostColumnWithOne([[0,0,0,1],[0,0,1,1],[0,1,1,1]]))