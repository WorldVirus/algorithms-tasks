/** LINK: https://leetcode.com/problems/kth-largest-element-in-an-array
 * 
 *  EXAMPLES:
 *  Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
 *  Output: 4
 */

function largest(nums, k) {
    function swap(indexA,indexB){
        let buffer = nums[indexA];
        nums[indexA] = nums[indexB];
        nums[indexB] = buffer;
    }
     
    function partion(left, right, pivotElement){
        let pivot = nums[pivotElement];
        swap(pivotElement,right);
        let coppyLeft = left;
        for(let i = left; i <= right; ++i){
            if(nums[i] < pivot){
               swap(coppyLeft, i);
                coppyLeft++;
          }
        }
        
        swap(coppyLeft, right);
        return coppyLeft;
    }
     
    function select(left, right, element){
        if(left === right){
           nums[left];
        }
        
        let pivot = left + (right - left);
        pivot = partion(left, right, pivot);
        
        if(element === pivot){
            return nums[element];
        }else if(element < pivot){
            return select(left, pivot - 1, element);
        }
       return select(pivot + 1, right, element);
    }
     
    
     
     return select(0, nums.length - 1, nums.length - k);
 }
 
console.log(largest([3,2,3,1,2,4,5,5,6],4));