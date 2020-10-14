/** LINK: https://leetcode.com/problems/task-scheduler
 * 
 *  EXAMPLES:
 *  Input: tasks = ["A", "B", "C", "D", "E", "A", "B", "C", "D", "E"], n = 2
 *  Output: 8
 */

function tasksSheduller(tasks, n) {
    let arrCounter = [];
    for (let i = 0; i < 26; ++i)
        arrCounter[i] = 0;

    for (let i = 0; i < tasks.length; ++i)
        arrCounter[tasks[i].charCodeAt() - 'A'.charCodeAt()]++;

    arrCounter.sort((a, b) => a - b);

    let i = 25;
    while (i > 0 && arrCounter[i] === arrCounter[25])--i;

    return Math.max(tasks.length, (arrCounter[25] - 1) * (n + 1) + 25 - i)
};

console.log(tasksSheduller(["A", "B", "C", "D", "E", "A", "B", "C", "D", "E"], 4))