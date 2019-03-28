/**LINK: https://www.hackerrank.com/challenges/sock-merchant/problem 
 * DESCRIPTION: Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.
 * 
 * EXAMPLES:
 *  
 * Sample Input

    9
    10 20 20 10 10 30 50 10 20

    Sample Output

    3
 */
function sockMerchant(n, ar) {
    let countMap = {};
    let counter = 0;

    ar.forEach(element => {
        countMap[`${element}`] = (countMap[`${element}`] || 0) + 1
    });
    for (let i in countMap) {
        counter += Math.floor(countMap[i] / 2)
    }
    return counter;
}

let array = [10,20,20,10,10,30,50,10,20];

console.log(sockMerchant(9,array))
