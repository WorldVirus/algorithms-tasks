/** LINK: https://leetcode.com/problems/meeting-rooms-ii
 *
 *  EXAMPLES:
 *  Input: intervals = [[0,30],[5,10],[15,20]];
 *  Output: 2
 */

function meetingRooms(intervals) {
    let startArr = [];
    let endArr = [];
    let answer = 0;
    
    for(let i=0; i<intervals.length; ++i){
        startArr.push(intervals[i][0]);
        endArr.push(intervals[i][1]);
    }
    
    startArr.sort((a,b) => a-b);
    endArr.sort((a,b) => a-b);
    
    let indexEnd = 0;
    let indexStart = 0;
    while(indexStart < startArr.length){
        if(startArr[indexStart] >= endArr[indexEnd]){
           ++indexEnd;
            --answer;
          }
        ++answer;
        ++indexStart;
    }
    return answer;
}

console.log(meetingRooms([[0,30],[5,10],[15,20]]));