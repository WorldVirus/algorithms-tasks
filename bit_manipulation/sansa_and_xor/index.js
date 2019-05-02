/** LINK: https://www.hackerrank.com/challenges/sansa-and-xor/problem
 * 
 *  DESCRIPTION: найти значение, полученное применением операции XOR к соприкасающимся подмассивам, 
 *  а потом применением XOR к полученным результатам.
 * 
 *  EXAMPLES: 
 * 
 *  Sample Input 
    1 2 3
    4 5 7 5

    Sample Output 
    2
    0
 * 
 */

function sansaXor(arr) {
    let size = arr.length;
    if (size % 2 == 0)
        return 0;

    let finalXorAnswer = arr[0];
    for (let i = 2; i < size; i += 2) {
        finalXorAnswer ^= arr[i];
    }

    return finalXorAnswer;
}

console.log(sansaXor([1, 2, 3]))
//console.log(sansaXor([4,5,7,5]))