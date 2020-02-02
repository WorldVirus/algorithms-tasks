/** LINK: https://stepik.org/lesson/41234/step/1?unit=19818
 * 
 *  EXAMPLES:
 *  Input: nums = ([](){([])})
 *  Output: Success
 */

const { createInterface } = require("readline");
function findBrackets(inputStr) {
  let stack = [];
  for (let i = 0; i < inputStr.length; ++i) {
    switch (inputStr[i]) {
      case "(":
        stack.push(i);
        stack.push(")");
        break;

      case "[":
        stack.push(i);
        stack.push("]");
        break;

      case "{":
        stack.push(i);
        stack.push("}");
        break;

      default:
        if (inputStr[i] === "]" || inputStr[i] === ")" || inputStr[i] === "}") {
          if (inputStr[i] !== stack[stack.length - 1]) {
            return i + 1;
          }
          stack.pop();
          stack.pop();
        }
        break;
    }
  }

  return !stack.length ? "Success" : stack[0] + 1;
}
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", line => {
  console.log(findBrackets(line));
}).on("close", () => {
  process.exit(0);
});
