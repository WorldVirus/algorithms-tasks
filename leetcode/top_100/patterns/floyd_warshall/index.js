/** LINK: https://leetcode.com/problems/network-delay-time/
 *
 *  EXAMPLES:
 *  Input: [[2,1,1],[2,3,1],[3,4,1]],4,2
 *  Output: 2
 */
var networkDelayTime = function (times, N, K) {
    let arr = [];
    let max = 0;

    for (let i = 0; i < N; ++i) {
        arr[i] = [];
        for (let j = 0; j < N; ++j) {
            arr[i][j] = Number.MAX_VALUE;
        }
    }

    for (let i = 0; i < N; ++i) {
        arr[i][i] = 0;
    }

    for (let i = 0; i < times.length; ++i) {
        arr[times[i][0] - 1][times[i][1] - 1] = times[i][2];
    }

    for (let k = 0; k < N; ++k) {
        for (let i = 0; i < N; ++i) {
            for (let j = 0; j < N; ++j) {
                if (arr[i][j] > arr[i][k] + arr[k][j]) {
                    arr[i][j] = arr[i][k] + arr[k][j];
                }
            }
        }
    }

    for (let j = 0; j < N; ++j) {
        if (arr[K - 1][j] === Number.MAX_VALUE) {
            return -1;
        }

        max = Math.max(max, arr[K - 1][j])
    }

    return max;
}

console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]],4,2));