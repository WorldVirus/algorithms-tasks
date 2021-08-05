/** LINK: https://leetcode.com/problems/course-schedule-ii/
 * 
 *  EXAMPLES:
 *  Input: 4, [[1,0],[2,0],[3,1],[3,2]]
 *  Output: [0,1,2,3]
 */

var findOrder = function (numCourses, prerequisites) {
    let g = {};
    let arr = [];

    for (let i = 0; i < numCourses; ++i) {
        g[`${i}`] = [];
        arr[i] = 0;
    }
    for (let i = 0; i < prerequisites.length; ++i) {
        g[`${prerequisites[i][1]}`].push(prerequisites[i][0]);
        ++arr[prerequisites[i][0]];
    }

    let q = [];

    for (let i = 0; i < numCourses; ++i) {
        if (!arr[i]) {
            q.push(i);
        }
    }

    let answer = [];
    while (q.length) {
        --numCourses;
        let cur = q.shift();
        answer.push(cur);
        let bufA = g[`${cur}`];
        for (let i = 0; i < bufA.length; ++i) {
            --arr[bufA[i]];
            if (!arr[bufA[i]]) {
                q.push(bufA[i]);
            }
        }
    }

    return numCourses === 0 ? answer : [];
};

