/**LINK: https://www.hackerrank.com/challenges/cavity-map/problem?isFullScreen=false
 * DESCRIPTION: Вам задана прямоугольная карта глубин водоема размера . Для каждой клетки карты задана ее глубина (целое число). Будем называть некоторую клетку карты впадиной, если эта клетка не находится на границе карты, и все соседние по стороне с ней клетки имеют строго меньшую глубину.
Ваша задача  найти все впадины на карте и отметить их символами X.

EXAMPLES: 
Пример входных данных
4
1112
1912
1892
1234

Пример выходных данных
1112
1X12
18X2
1234
 */
function cavityMap(grid) {
  let checkerMap = {};
  let answer = [];
  for (let i = 0; i < grid.length; ++i) {
    let index = 0;
    let str = grid[i];
    let max = str[0];
    for (let j = 0; j < str.length; ++j) {
      if (max < str[j]) {
        index = j;
        max = str[j];
      }
    }
    if (
      (checkerMap[`${index}`] === undefined || checkerMap[`${index}`] < max) &&
      (index !== 0 && index !== str.length - 1)
    ) {
      checkerMap[`${index}`] = max;
    }
  }
  for (let i = 0; i < grid.length; ++i) {
    let strWrapper = "";
    let str = grid[i];
    for (let j = 0; j < str.length; ++j) {
      if (checkerMap[`${j}`] === str[j]) {
        strWrapper += "X";
      } else {
        strWrapper += str[j];
      }
    }
    answer[i] = strWrapper;
  }

  return answer;
}

let grid = ["1 2", "1 2"];
console.log(grid);
console.log(cavityMap(grid));

// 1112
// 1912
// 1892
// 1234
