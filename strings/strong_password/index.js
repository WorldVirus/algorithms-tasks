/** LINK: https://www.hackerrank.com/challenges/strong-password/problem
 * 
 *  DESCRIPTION: She typed a random string of length  in the password field but wasn't sure if it was strong. 
 *  Given the string she typed, can you find the minimum number of characters she must add to make her password strong?
 * 
 *  EXAMPLES: 
 *  
 *  Sample Input 0

    3
    Ab1

    Sample Output 0

    3
 */

function minimumNumber(n, password) {
    let counter = 0;

    if (!/[0-9]/g.test(password))
        ++counter;
    if (!/[a-z]/g.test(password))
        ++counter;
    if (!/[A-Z]/g.test(password))
        ++counter;
    if (!/[!@#$%^&*()-+]/g.test(password))
        ++counter;

    let difference = 6 - n - counter;

    return n + counter < 6 ? counter + difference : counter;
}

console.log(minimumNumber(7,'AUzs-nV'))
