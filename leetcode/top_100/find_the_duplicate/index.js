/** LINK: https://leetcode.com/problems/find-the-duplicate-number/
 *
 *  EXAMPLES:
 *  Input: [3,1,3,4,2]
 *  Output: 3
 */

function findDuplicate (nums) {
    let tortoise = nums[0];
    let hare = nums[0];

    do{
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];    
    } while(tortoise !== hare)
    
    let pointerT = nums[0];
    let pointerH = hare;
    while(pointerT !== pointerH){
        pointerT = nums[pointerT];  
        pointerH = nums[pointerH];
    }
    
    return pointerT;
};

console.log(findDuplicate([3,1,3,4,2]))