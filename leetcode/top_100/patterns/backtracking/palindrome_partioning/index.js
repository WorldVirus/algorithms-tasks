/** LINK: https://leetcode.com/problems/palindrome-partitioning/
 *
 *  EXAMPLES:
 *  Input: "aab"
 *  Output: [["a","a","b"],["aa","b"]]
 */
var partition = function (s) {
    let answer = [];
    function checkPal(i, j) {
        while (i <= j) {
            if (s[i] !== s[j]) {
                return false;
            }
            --j;
            ++i;
        }

        return true;
    }

    function addPartion(i, arr) {
        if (s.length === i) {
            answer.push(arr.slice(0));
            return;
        }
        for (let j = i; j < s.length; ++j) {
            if (checkPal(i, j)) {
                arr.push(s.substring(i, j + 1));
                addPartion(j + 1, arr);
                arr.pop();
            }
        }
    }


    addPartion(0, []);

    return answer;
};

console.log(partition("aab"));