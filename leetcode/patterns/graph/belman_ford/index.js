/** LINK: https://leetcode.com/problems/network-delay-time/
 *
 *  EXAMPLES:
 *  Input: [[2,1,1],[2,3,1],[3,4,1]],4,2
 *  Output: 2
 */
var networkDelayTime = function (times, N, K) {
    let arr = [];
    let answer = Number.MIN_VALUE;

    for (let i = 0; i < N; ++i) {
        arr[i] = Number.MAX_VALUE;
    }

    arr[K - 1] = 0;

    for (let i = 0; i < N; ++i) {
        for (let j = 0; j < times.length; ++j) {
            let u = times[j][0] - 1;
            let v = times[j][1] - 1;
            let w = times[j][2];
            arr[v] = Math.min(arr[v], arr[u] + w);
        }
    }

    for (let i = 0; i < arr.length; ++i) {
        answer = Math.max(answer, arr[i]);
    }

    return answer === Number.MAX_VALUE ? -1 : answer;
};

console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]],4,2))