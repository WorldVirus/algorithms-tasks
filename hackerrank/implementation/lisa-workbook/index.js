/**LINK:https://www.hackerrank.com/challenges/lisa-workbook/problem
 * DESCRIPTION:Lisa just got a new math workbook. A workbook contains exercise problems, grouped into chapters. Lisa believes a problem to be special if its index (within a chapter) is the same as the page number where it's located. The format of Lisa's book is as follows:
There are  chapters in Lisa's workbook, numbered from  to .
The  chapter has  problems, numbered from  to .
Each page can hold up to  problems. Only a chapter's last page of exercises may contain fewer than  problems.
Each new chapter starts on a new page, so a page will never contain problems from more than one chapter.
The page number indexing starts at .
Given the details for Lisa's workbook, can you count its number of special problems?
For example, Lisa's workbook contains  problems for chapter , and  problems for chapter . Each page can hold  problems. The first page will hold  problems for chapter . Problem  is on page , so it is special. Page contains only Chapter , Problem , so no special problem is on page . Chapter  problems start on page  and there are problems. Since there is no problem  on page , there is no special problem on that page either. There is  special problem in her workbook.

EXAMPLE: 

Sample Input
5 3  
4 2 6 1 10

Sample Output
4
 */
function workbook(n, k, arr) {
  let size = 0;
  for (let i = 0; i < arr.length; ++i) {
    let remainder = arr[i] >= k ? arr[i] % k : 1;
    size = size + Math.floor(arr[i] / k) + remainder;
  }
  let counter = 0;
  let index = 0;
  for (let i = 1; i <= size; ++i) {
    for (let j = 1; j <= arr[index]; ++j) {
      if (j === i) {
        ++counter;
      }
      if (j % k === 0 && j !== arr[index]) {
        ++i;
      }
    }
    ++index;
  }
  return counter;
}
let arr = [4, 2, 6, 1, 10];
console.log(workbook(5, 3, arr));
