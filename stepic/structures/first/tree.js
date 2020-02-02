/** LINK: https://stepik.org/lesson/41234/step/2?unit=19818
 * 
 *  EXAMPLES:
 *  Input: 10, 9 7 5 5 2 9 9 9 2 -1
 *  Output: 4
 */

 const { createInterface } = require("readline");
let firstInput = "";
let secondInput = "";
let currentLine = 0;
function readLine() {
  return inputString[currentLine++];
}

let visited = [];
let heightVlue = [];

function getHeight(inputArr, index) {
  if (inputArr[index] === -1) {
    visited[index] = "#";
    return 1;
  }
  if (inputArr[index] === "#") {
    return heightVlue[index];
  }
  visited[index] = "#";
  heightVlue[index] = 1 + getHeight(inputArr, inputArr[index]);
  return heightVlue[index];
}

function findHeight(inputArr) {
  let max = 0;
  for (let i = 0; i < inputArr.length; ++i) {
    visited[i] = 0;
    heightVlue[i] = 0;
  }
  for (let i = 0; i < inputArr.length; ++i) {
    if (visited[i] !== "#") {
      heightVlue[i] = getHeight(inputArr, i);
      max = Math.max(max, heightVlue[i]);
    }
  }

  return max;
}

function main() {
  firstInput = firstInput
    .replace(/\s+$/g, "")
    .split(" ")
    .map(aTemp => parseInt(aTemp, 10));
  secondInput = secondInput
    .replace(/\s+$/g, "")
    .split(" ")
    .map(aTemp => parseInt(aTemp, 10));
  return findHeight(secondInput);
  //console.log(typeof firstInput,typeof secondInput);
}
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", line => {
  // your code
  if (!firstInput.length) {
    firstInput += line;
  } else {
    secondInput += line;
  }

  //console.log(findBrackets(line));
}).on("close", () => {
  console.log(main());
  process.exit(0);
});
