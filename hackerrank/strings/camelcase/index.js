/* LINK: https://www.hackerrank.com/challenges/camelcase/problem

   DESCRIPTION: Given , print the number of words in  on a new line.
   For example, . There are  words in the string.

    EXAMPLES:
    
    Sample Input

    saveChangesInTheEditor
    
    Sample Output

    5
*/

function camelcase(s) {
    let counter = 1;

    for (let i = 0; i < s.length; ++i) { 
        //for fun
       // if (s[i] === s[i].toUpperCase())
        if (s[i] >= 'A' && s[i] <= 'Z') 
            ++counter;
    }

    return counter;
    
    // some test failed
    //return s.match(/[A-Z]/g).length + 1;
}