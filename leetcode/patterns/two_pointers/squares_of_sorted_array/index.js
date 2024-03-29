/** LINK: https://leetcode.com/problems/squares-of-a-sorted-array/
 * 
 *  EXAMPLES:
 *  Input: [-7,-3,2,3,11]
 *  Output: [4,9,9,49,121]
 */

function sortedSquares(A) {
	let first = 0;
	let last = A.length - 1;
	//[-4,-3,0,1,3]
	while(first <= last){
		let firstS =  Math.pow(A[first],2); //9
		let lastS =  Math.pow(A[last],2);  //9
		if(firstS >= lastS){
			A.splice(first, 1); // [0,1,3,16]
			A.splice(last,0,firstS); // [0,1,3,9,16]
			--last; // 2
        } else {
	        A[last] = lastS;
	        --last;
        }
    }

    return A;

};

console.log(sortedSquares([-7,-3,2,3,11]));