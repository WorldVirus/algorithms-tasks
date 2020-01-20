/** LINK: https://leetcode.com/problems/valid-parentheses
 *
 *  EXAMPLES:
 *  Input: s = "([)]"
 *  Output: False
 */

function validParentheses(s) {
  let checkQueue = [];

  for (let i = 0; i < s.length; ++i) {
    switch (s[i]) {
      case "(":
        checkQueue.push(")");
        break;

      case "{":
        checkQueue.push("}");
        break;

      case "[":
        checkQueue.push("]");
        break;

      default:
        if (s[i] !== checkQueue[checkQueue.length - 1] || !checkQueue.length) {
          return false;
        } else {
          checkQueue.pop();
          break;
        }
    }
  }

  return checkQueue.length === 0;
}

console.log(validParentheses("([)]"));