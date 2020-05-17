/** LINK: https://leetcode.com/problems/k-closest-points-to-origin/
 * 
 *  EXAMPLES:
 *  Input: [[3,3],[5,-1],[-2,4]], 2
 *  Output: [[3,3],[-2,4]]
 */

function kClosest(points, K) {
	let checker = {};
	
	for(let i=0; i < points.length; ++i){
		checker[`${i}`] = points[i][0]*points[i][0] + points[i][1]*points[i][1]; 
    }

    let sortedAr = Object.keys(checker).sort((a,b)=> checker[a] - checker[b]); 

    let answer = [];

    for(let i = 0; i < K; ++i){
        answer.push(points[sortedAr[i]]); 
    }

    return answer; 
};

console.log(kClosest([[3,3],[5,-1],[-2,4]], 2));