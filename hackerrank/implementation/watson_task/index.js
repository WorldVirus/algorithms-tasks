/** LINK: https://www.hackerrank.com/challenges/circular-array-rotation/problem
 * 
 * DESCRIPTION:
 * Джон Ватсон хочет проверить Шерлока Холмса. Он дал ему массив A0,A1 ... AN-1 . Выполнил некоторое преобразование массива, а затем задал Шерлоку Q вопросов. Шерлок чувствует, что преобразование, которое применил Джон, называется циклический сдвиг вправо на K. Циклический сдвиг вправо на 1 преобразует массив A0,A1 ... AN-1 в AN-1,A0 ... AN-2. Джон применил сдвиг на единицу K раз.

Помогите Шерлоку ответить на вопросы. Каждый вопрос описывается целым числом X, в ответ на вопрос Шерлок должен выписать элемент AX преобразованного массива.

EXAMPLES:
Пример входных данных #00

3 2 3
1 2 3
0
1
2

Пример выходных данных #00

2
3
1
 */

function circularArrayRotation(a, k, queries) {
  let posContainer = {};
  let answer = [];
  let size = a.length - 1;
  let newK = k - 1;
  if (a.length === 1) {
    return a;
  }
  for (let i = 0; i <= size; ++i) {
    if (size - i <= newK) {
      posContainer[`${newK - size + i}`] = a[i];
    } else {
      posContainer[`${i + k}`] = a[i];
    }
  }
  for (let j = 0; j < queries.length; ++j) {
    answer.push(posContainer[`${queries[j]}`]);
  }
  return answer;
}
let testA = [2];
let testK = 2;
let testQueries = [0, 1, 2];
console.log(circularArrayRotation(testA, testK, testQueries));
