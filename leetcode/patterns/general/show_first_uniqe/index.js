/** LINK: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3313/
 *
 *  EXAMPLES:
 *  Input: ["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add","showFirstUnique"][[[2,3,5]],[],[5],[],[2],[],[3],[]]
 *  Output: [null,2,null,2,null,3,null,-1]
 */

/**
 * @param {number[]} nums
 */
var FirstUnique = function (nums) {
  this.checker = new Map();
  for (let i = 0; i < nums.length; ++i) {
    if (!this.checker.has(nums[i])) {
      this.checker.set(nums[i], 0);
    }
    let buf = this.checker.get(nums[i]);
    this.checker.set(nums[i], ++buf);
  }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
  let keys = this.checker.keys();
  let buf = keys.next().value;
  while (buf) {
    if (this.checker.get(buf) === 1) {
      return buf;
    }

    buf = keys.next().value;
  }

  return -1;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
  let buf = this.checker.get(value);
  if (buf) {
    this.checker.set(value, ++buf);
  } else {
    this.checker.set(value, 1);
  }
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
