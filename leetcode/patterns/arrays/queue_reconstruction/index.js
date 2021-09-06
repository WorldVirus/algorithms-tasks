/** LINK: https://leetcode.com/problems/queue-reconstruction-by-height
 * 
 *  EXAMPLES:
 *  Input: people=[[9,0],[7,0],[1,9],[3,0],[2,7],[5,3],[6,0],[3,4],[6,2],[5,2]]
 *  Output: [[3,0],[6,0],[7,0],[5,2],[3,4],[5,3],[6,2],[2,7],[9,0],[1,9]]
 */

function queueReconstration (people) {
    people.sort((a,b) => {
        if(a[0] === b[0]){ return b[1] > a[1] ?  -1 : 1;}
        return b[0] - a[0]
    });

   let answer = [];
   for(let i = 0; i < people.length; ++i){
       let bufferValue = people[i]
        answer.splice(bufferValue[1],0,bufferValue);
       
    }
    
    return answer;
}

console.log(queueReconstration([[9,0],[7,0],[1,9],[3,0],[2,7],[5,3],[6,0],[3,4],[6,2],[5,2]]));