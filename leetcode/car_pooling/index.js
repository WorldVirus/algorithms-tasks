/** LINK: https://leetcode.com/problems/car-pooling/
 * 
 *  EXAMPLES:
 *  Input: [[2,1,5],[3,5,7]], 3
 *  Output: true
 */

function carPooling(trips, capacity) {
  let checker = {};
  for (let i = 0; i < trips.length; ++i) {
    // checker = {1: 2, 3: 3, 5: -2, 7: -3}
    if (checker[`${trips[i][1]}`]) {
      checker[`${trips[i][1]}`] += trips[i][0];
    } else {
      checker[`${trips[i][1]}`] = trips[i][0];
    }
    if (checker[`${trips[i][2]}`]) {
      checker[`${trips[i][2]}`] -= trips[i][0];
    } else {
      checker[`${trips[i][2]}`] = -1 * trips[i][0];
    }
  }
  let bufVal = 0;
  for (let key in checker) {
    bufVal += checker[key];
    if (bufVal > capacity) {
      return false;
    }
  }
  return true;
}

console.log(carPooling([[2,1,5],[3,5,7]], 3))