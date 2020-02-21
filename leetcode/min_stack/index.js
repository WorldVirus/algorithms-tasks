/** LINK: https://leetcode.com/problems/min-stack
 *
 *  EXAMPLES:
 *  Input: ["MinStack","push","push","push","getMin","pop","top","getMin"][[],[-2],[0],[-3],[],[],[],[]]
 *  Output: [null,null,null,null,-3,null,0,-2]
 */

var MinStack = function() {
  this.stack = [];
  this.minData = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (!this.minData.length || this.minData[this.minData.length - 1][1] > x) {
    this.minData.push([1, x]);
  } else if (this.minData[this.minData.length - 1][1] === x) {
    ++this.minData[this.minData.length - 1][0];
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let removedValue = this.stack.pop();
  if (removedValue === this.minData[this.minData.length - 1][1]) {
    --this.minData[this.minData.length - 1][0];
  }

  if (!this.minData[this.minData.length - 1][0]) {
    this.minData.pop();
  }

  return removedValue;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minData[this.minData.length - 1][1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
