/** LINK: https://www.hackerrank.com/challenges/acm-icpc-team/problem
 * There are a number of people who will be attending ACM-ICPC World Finals. Each of them may be well versed in a number of topics. Given a list of topics known by each attendee, you must determine the maximum number of topics a 2-person team can know. Also find out how many ways a team can be formed to know that many topics. Lists will be in the form of bit strings, where each string represents an attendee and each position in that string represents a field of knowledge, 1 if its a known field or 0 if not.
 *  EXAMPLE:
 * 
 * Sample Input
    4 5
    10101
    11100
    11010
    00101

    Sample Output

     5
     2
 */ 

//mock data
const topic = ["10101", "11100", "11010", "00101"];

function acmTeam(topic) {
  let answer = [];
  let counter = 0;
  let maxValue = 0;
  for (let i = 0; i < topic.length; ++i) {
    let compareValue = topic[i];
    for (let j = i + 1; j < topic.length; ++j) {
      let curValue = topic[j];
      let midleMax = 0;
      let midleCounter = 0;
      for (let k = 0; k < curValue.length; ++k) {
        if (compareValue[k] | curValue[k]) {
          ++midleMax;
        }
        if (maxValue < midleMax) {
          maxValue = midleMax;
          counter = 0;
        }
        if (maxValue === midleMax && k === curValue.length - 1) {
          ++midleCounter;
        }
      }
      if (midleCounter) {
        ++counter;
      }
    }
  }
  answer.push(maxValue);
  answer.push(counter);
  return answer;
}

acmTeam(topic);
