/** LINK: https://www.hackerrank.com/challenges/flipping-bits/problem
 * 
 *  DESCRIPTION: Вам предоставляется список 32-битных беззнаковых целых чисел. 
 *  Вы должны вывести список беззнаковых целых чисел, полученных инвертированием битов в их двоичном представлении (то есть, неустановленные биты должны быть установленными, а установленные  неустановленными).
 * 
 *  EXAMPLES: 
 * 
 *  Sample Input 
    3
    2147483647
    1
    0

    Sample Output 
    2147483648
    4294967294
    4294967295

 * 
 */

function flippingBits(N) {
    // useful links:
    // https://www.w3schools.com/js/js_bitwise.asp
    // https://stackoverflow.com/questions/42450510/invert-unsigned-arbitrary-binary-bits-in-javascript
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_shift_operators
    
    return ~N >>> 0;
}
