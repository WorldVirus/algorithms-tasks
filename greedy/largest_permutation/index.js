/** LINK: https://www.hackerrank.com/challenges/largest-permutation/problem
 * 
 *  DESCRIPTION: You are given an unordered array of unique integers incrementing from . You can swap any two elements a limited number of times. 
 *  Determine the largest lexicographical value array that can be created by executing no more than the limited number of swaps.
 *  
 *  EXAMPLES: 
 *  Sample Input 
    1
    4 2 3 5 1
 * 
 *  Sample Output
    5 2 3 4 1
 */

function largestPermutation(k, arr) {
        let checkerObj = {};
        let size = arr.length - 1;
        for (let i = 0; i <= size; ++i)
            checkerObj[`${arr[i]}`] = i;
    
        let arrValue = Object.keys(checkerObj);
        for (let index = 0; i <= size; ++index) {
            if (k !== 0) {
                let indexChanger = checkerObj[`${arrValue[size - index]}`];
                if (indexChanger === index)
                    continue;

                let bufferSwapObject = checkerObj[`${arrValue[size - index]}`];
                checkerObj[`${arrValue[size - index]}`] = checkerObj[arr[index]];
                checkerObj[arr[index]] = bufferSwapObject;

                let bufferSwapArr = arr[index];
                arr[index] = arr[indexChanger];
                arr[indexChanger] = bufferSwapArr;

                --k;
            } else {
                break;
            }
        }

    // trying bruteforse
    // let coppyArr = arr.slice(0);
    // coppyArr.sort((a, b) => b - a);
    // if (arr.length === k)
    //     return coppyArr;

    // let index = 0;
    // while (index < k) {
    //     let i = index;
    //     while (arr[i] !== coppyArr[index])
    //         ++i;
        
    //     let bufferSwap = arr[index];
    //     arr[index] = arr[i];
    //     arr[i] = bufferSwap;
    //     ++index;
    //  }

    return arr;
}
