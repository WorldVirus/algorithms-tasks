/** LINK: https://leetcode.com/problems/friend-circles/
 *
 *  EXAMPLES:
 *  Input: [[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]
 *  Output: 1
 */

var findCircleNum = function (M) {
  let answer = 0;
  let visited = [];
  let queue = [];

  for (let i = 0; i < M.length; ++i) {
    visited[i] = 0;
  }

  for (let i = 0; i < M.length; ++i) {
    if (visited[i] === 0) {
      queue.push(i);
      while (queue.length) {
        let cur = queue.shift();
        visited[cur] = 1;
        for (let j = 0; j < M.length; ++j) {
          if (M[cur][j] === 1 && !visited[j]) {
            queue.push(j);
          }
        }
      }
      ++answer;
    }
  }
  
  return answer;
};

console.log(findCircleNum([[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]))