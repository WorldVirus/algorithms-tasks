/** LINK: https://leetcode.com/problems/3sum-closest/
 *
 *  EXAMPLES:
 *  Input: [-1,2,1,-4], 1
 *  Output: 2
 */

function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let min = Number.MAX_VALUE;

  for (let i = 0; i < nums.length; ++i) {
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end];
      if (Math.abs(target - sum) < Math.abs(min)) {
        min = target - sum;
      }
      if (sum < target) {
        ++start;
      } else {
        --end;
      }
    }
    if (min == 0 || target <= nums[i]) {
      break;
    }
  }

  return target - min;

  // brute force
  // 	let min = Number.MAX_VALUE;
  // 	let answer = 0;

  // 	for(let i=0; i < nums.length - 2; ++i){
  // 		for(let j=i+1; j < nums.length - 1; ++j){
  // 	    let bufSum = nums[i] + nums[j]; // 3
  // 	    for(let k=j+1; k < nums.length; ++k){
  // 	// nums[k]=1
  // 	          let dif = Math.abs(target - bufSum - nums[k]) // 2
  //             if(min > dif){
  //                               console.log(dif,i,j,k, answer)

  //                 min = dif; // 1
  //                 answer = bufSum + nums[k]; // 2
  //              }
  //             }
  //         }
  //     }

  //     return answer;
}

console.log(threeSumClosest([-1,2,1,-4],1));