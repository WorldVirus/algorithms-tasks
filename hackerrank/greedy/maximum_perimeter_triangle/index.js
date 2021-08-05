/** LINK: https://www.hackerrank.com/challenges/maximum-perimeter-triangle/problem
 * 
 *  DESCRIPTION: Given an array of stick lengths, use  of them to construct a non-degenerate triange with the maximum possible perimeter. 
 *  Print the lengths of its sides as  space-separated integers in non-decreasing order.
 * 
 *  EXAMPLES:
 * 
 *  Sample Input 
    1 1 1 3 3

    Sample Output 
    1 3 3
 */

function maximumPerimeterTriangle(sticks) {
    // cool desigion from discussions

    sticks.sort((a, b) => a - b);

    let index = sticks.length - 3;
    while (index >= 0 && (sticks[index] + sticks[index + 1] <= sticks[index + 2]))
        --index;

    if (index >= 0)
        return [sticks[index], sticks[index + 1], sticks[index + 2]];

    return [-1];

    // hardcore brute force
    //
    // let checkerObj = {};
    // let size = sticks.length;
    // sticks.sort((a, b) => a - b)
    // for (let i = 0; i < size - 2; ++i) {

    //     let secondIndex = i + 1;
    //     while (secondIndex < size - 1) {

    //         let bufferValue = sticks[i] + sticks[secondIndex];
    //         let thirdIndex = secondIndex + 1;
    //         while (thirdIndex < size) {
    //             if (bufferValue > sticks[thirdIndex]) {
    //                 let maxPerimetr = Object.keys(checkerObj);
    //                 if (maxPerimetr[0] < bufferValue + sticks[thirdIndex] || maxPerimetr[0] === undefined) {
    //                     delete (checkerObj[maxPerimetr[0]])
    //                     checkerObj[`${bufferValue + sticks[thirdIndex]}`] = [];
    //                     checkerObj[`${bufferValue + sticks[thirdIndex]}`].push(sticks[i], sticks[secondIndex], sticks[thirdIndex])
    //                 }
    //                 ++thirdIndex;
    //             }
    //             break;
    //         }
    //         ++secondIndex;
    //     }
    // }
    
    // let finalArr = Object.values(checkerObj);
    // return finalArr[0] ? finalArr[0] : [-1];
}
console.log(maximumPerimeterTriangle([1,1,1,2,3,5]))
