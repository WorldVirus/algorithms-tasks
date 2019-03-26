/**LINK: https://www.hackerrank.com/challenges/strange-code/problem
 * 
 * DESCRIPTION:Bob has a strange counter. At the first second, it displays the number . Each second, the number displayed by the counter decrements by  until it reaches .
The counter counts down in cycles. In next second, the timer resets to  and continues counting down. The diagram below shows the counter values for each time  in the first three cycles:
Find and print the value displayed by the counter at time

EXAMPLES:
Sample Input

4

Sample Output

6

PROBLEAMS: WITH TIME
 * 
 *  
 */

function strangeCounter(t) {
  let slotsCounter = 3;
  let posCounter = 1;

  while (true) {
    if (posCounter < t) {
      posCounter += slotsCounter;
      slotsCounter *= 2;
    } else if (posCounter === t) {
      return slotsCounter;
    } else if (posCounter > t) {
      let bufValue = 0;
      while (posCounter !== t) {
        --posCounter;
        ++bufValue;
      }
      console.log(bufValue);

      return bufValue;
    }
  }
}
console.log(strangeCounter(4));
//console.log(strangeCounter(17))
