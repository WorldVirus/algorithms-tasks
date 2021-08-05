/** LINK: https://www.hackerrank.com/challenges/minimum-loss/problem
 * 
 *  DESCRIPTION: Find and print the minimum amount of money Lauren must lose if she buys the house and resells it within the next  years.

 *  EXAMPLES: 
 * 
 *  Sample Input:

    5 10 3

    Sample Output:

    2

 */

function minimumLoss(price) {
    // main version

    let checkerObject = {};
    for (let i = 0; i < price.length; ++i)
        checkerObject[`${price[i]}`] = i;

    price.sort((a, b) => a - b)

    let min = price[0];
    for (let i = price.length - 1; i > 0; --i) {
        if (price[i] - price[i - 1] < min) {
            if (checkerObject[`${price[i]}`] < checkerObject[`${price[i - 1]}`])
                min = price[i] - price[i - 1]
         }
    }

    return min;

    // second version
    // let checkerObject = {};
    // price.sort((a,b)=> a-b);

    // for (let i = 0; i < price.length - 1; ++i) {
    //     let min = price[i];
    //     for (let j = i+1; j < price.length; ++j) {
    //         let bufferValue = price[i] - price[j]
    //         if (min > bufferValue && bufferValue > 0)
    //             min = bufferValue;
    //     }
    //     if (min === 0)
    //         return 0;
    //     checkerObject[`${min}`] = i;
    // }
    // return Object.keys(checkerObject)[0];
}

console.log(minimumLoss([20,7,8,2,5]))
