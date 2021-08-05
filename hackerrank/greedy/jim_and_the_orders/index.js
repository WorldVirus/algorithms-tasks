/** LINK: https://www.hackerrank.com/challenges/jim-and-the-orders/problem
 *  
 *  DESCRIPTION: Как-то раз n фанатов булочек пришли в булочную. Фанат с номером i заказал булочку в момент времени t, при этом приготовление его булочки займет d единиц времени. 
 *  В каком порядке приготовятся булочки фанатов?
 * 
 *  EXAMPLES: 
 *  Sample Input
 *  8 1
    4 2
    5 6
    3 1
    4 3

    Sample Output
    4 2 5 1 3
 * 
 */

function jimOrders(orders) {
    let checkerObj = {};
    let sizeRow = orders.length;
    for (let i = 0; i < sizeRow; ++i)
        checkerObj[`${i + 1}`] = orders[i][0] + orders[i][1];

    let answerArr = Object.keys(checkerObj).sort((a, b) => checkerObj[a] - checkerObj[b])

    return answerArr;
}
