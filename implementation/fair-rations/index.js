/**LINK: https://www.hackerrank.com/challenges/fair-rations/problem
 * DESCRIPTION:You are the benevolent ruler of Rankhacker Castle, and today you're distributing bread. Your subjects are in a line, and some of them already have some loaves. Times are hard and your castle's food stocks are dwindling, so you must distribute as few loaves as possible according to the following rules:

Every time you give a loaf of bread to some person , you must also give a loaf of bread to the person immediately in front of or behind them in the line (i.e., persons  or ).
After all the bread is distributed, each person must have an even number of loaves.
Given the number of loaves already held by each citizen, find and print the minimum number of loaves you must distribute to satisfy the two rules above. If this is not possible, print NO.

For example, the people in line have loaves . We can first give a loaf to  and  so . Next we give a loaf to  and  and have  which satisfies our conditions. We had to distribute  loaves

EXAMPLES: 
Sample Input 0

5
2 3 4 5 6

Sample Output 0

4

 * 
 *  
 */
function fairRations(B) {
    let counter = 0;
    
    for(let i = B.length - 1; i >= 0; --i){
        if(B[i] %2 !== 0 && i!==0){
            ++B[i];
            ++B[i-1];
            ++counter;
      }
      else if(B[i] %2 !== 0  && i === 0){
          if(B[i+1] %2 === 0 ){
              return `NO`
          } else{
              ++B[i];
              ++B[i+1];
              ++counter;
          }
      }
    }
    return counter*2;
}
let test = [4,5,6,7]
console.log(fairRations(test))