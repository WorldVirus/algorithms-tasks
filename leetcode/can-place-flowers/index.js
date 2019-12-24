/** LINK: https://leetcode.com/problems/can-place-flowers/
 * 
 *  EXAMPLES:
 *  Input: flowerbed = [1,0,0,0,1], n = 1
 *  Output: True
 */
function flowers(flowerbed, n){
    let counterPlace = 0;
    
    for(let i = 0; i < flowerbed.length; ++i){
        if(flowerbed[i] === 0 && flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1){
            ++counterPlace;
            i+=2;
         }
    }
    return counterPlace >= n;
}

console.log(flowers([1,0,0,0,1],2));