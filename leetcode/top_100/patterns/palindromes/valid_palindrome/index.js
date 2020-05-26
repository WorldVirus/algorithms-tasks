/** LINK: https://leetcode.com/problems/valid-palindrome-ii/
 *
 *  EXAMPLES:
 *  Input: "abca"
 *  Output: true
 */

function validPalindrome(s) {
  function remover(start, end) {
    while (start <= end) {
      if (s[start] !== s[end]) {
        return false;
      }
      ++start;
      --end;
    }

    return true;
  }

  let size = s.length - 1;
  for (let i = 0; i < Math.floor(s.length / 2); ++i) {
    if (s[i] !== s[size - i]) {
      return remover(i + 1, size - i) || remover(i, size - i - 1);
    }
  }

  return true;
}

console.log(validPalindrome("abca"))