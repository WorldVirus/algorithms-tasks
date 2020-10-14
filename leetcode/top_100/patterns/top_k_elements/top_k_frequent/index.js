/** LINK: https://leetcode.com/problems/top-k-frequent-elements
 * 
 *  EXAMPLES:
 *  Input: nums = [1,1,1,2,2,3], k = 2
 *  Output: [1,2]
 */

class Queue {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    let newEl = new Queue(element, priority);
    let flag = false;
    for (let i = 0; i < this.items.length; ++i) {
      if (this.items[i].priority > newEl.priority) {
        this.items.splice(i, 0, newEl);
        flag = true;
        break;
      }
    }

    if (!flag) {
      this.items.push(newEl);
    }
  }

  dequeue() {
    this.items.shift();
  }
}

function frequentK(nums, k) {
  let answer = [];
  let numberEl = {};
  let bufferObj = new PriorityQueue();
  for (let i = 0; i < nums.length; ++i) {
    if (numberEl[`${nums[i]}`]) {
      ++numberEl[`${nums[i]}`];
    } else {
      numberEl[`${nums[i]}`] = 1;
    }
  }

  for (let key in numberEl) {
    bufferObj.enqueue(parseInt(key), numberEl[key]);
    if (bufferObj.items.length > k) {
      bufferObj.dequeue();
    }
  }

  for (let i = 0; i < bufferObj.items.length; ++i) {
    answer.push(parseInt(bufferObj.items[i].element));
  }
  return answer;
}

console.log(frequentK([1,1,1,2,2,3], 2));