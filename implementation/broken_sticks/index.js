/**LINK: https://www.hackerrank.com/challenges/cut-the-sticks/problem
 * 
 * DESCRIPTION:Представьте, что у вас кучка из N палочек. Палочки в этой кучке имеют длины: A1, A2, ..., AN. Далее вы выполняете следующую операцию: находите все палочки, которые длиннее, чем самая короткая палочка в кучке, и разламываете их на две части, так чтобы одна из частей была равна по длине самой короткой палочке в кучке; при этом для каждой палочки ту часть, которая равна по длине самой короткой палочке, вы оставляете в кучке, а другую откладываете в сторону. Таким образом после применения операции, у вас образуется две кучки: первая (изначальная) будет состоять из N палочек, каждая из которых имеет одинаковую длину (длина изначально минимальной по длине палочки), вторая (новая) образована частями палочек, которые вы отложили в сторону.

Теперь представьте, что, применив операцию один раз и получив две кучки, вы применяете операцию далее для новой кучки. А затем снова примените описанную операцию для новой полученной кучки. И так далее вы будете делать, до тех пор, пока отложенные палочки не будут равны по длине.

Вам заданы палочки в первоначальной кучке, вам требуется вывести последовательность количества палочек в кучках в процессе применения описанной операции.

EXAMPLE:
Входные данные

8
1 2 3 4 3 3 2 1

Выходные данные

8
6
4
1
 *  
 */
function cutTheSticks(arr) {
  if (arr.length === 1) {
    return arr;
  }

  for (let i = 0; i < arr.length; ++i) {
    let curValue = 0;
    let min = arr[i];
    for (let j = i; j < arr.length; ++j) {
      if (min >= arr[j]) {
        min = arr[j];
        curValue = j;
      }
    }
    [arr[i], arr[curValue]] = [arr[curValue], arr[i]];
  }
  let answer = [];
  let curLen = arr.length;
  for (let k = 0; k < arr.length; ++k) {
    let counter = 1;
    while (arr[k] === arr[k + 1] && arr.length !== k) {
      ++counter;
      ++k;
    }
    answer.push(curLen);
    curLen -= counter;
  }
  return answer;
}
//let test = [1,2,3,3,4,5,6]

let test = [1, 2, 3, 4, 3, 3, 2, 1];
console.log(cutTheSticks(test));
