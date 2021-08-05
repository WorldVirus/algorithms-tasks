/** LINK: https://leetcode.com/problems/course-schedule/
 * 
 *  EXAMPLES:
 *  Input: 3, [[1,0],[0,2],[2,1]]
 *  Output: False
 */

var canFinish = function (numCourses, prerequisites) {
    let graph = {};
    let arr = [];

    for (let i = 0; i < numCourses; ++i) {
        arr[i] = 0;
        graph[`${i}`] = [];
    }

    for (let i = 0; i < prerequisites.length; ++i) {
        graph[`${prerequisites[i][1]}`].push(prerequisites[i][0]);
        ++arr[prerequisites[i][0]];
    }

    let queue = [];
    for (let i = 0; i < numCourses; ++i) {
        if (!arr[i]) {
            queue.push(graph[`${i}`]);
        }
    }

    if (!queue.length) {
        return false;
    }

    while (queue.length) {
        let cur = queue.shift();
        --numCourses;
        for (let i = 0; i < cur.length; ++i) {
            --arr[cur[i]];
            if (!arr[cur[i]]) {
                queue.push(graph[`${cur[i]}`]);
            }
        }
    }

    return numCourses === 0;
};

console.log(canFinish(3, [[1,0],[0,2],[2,1]]));