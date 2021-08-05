/*LINK:https://www.hackerrank.com/challenges/bon-appetit/problem

DESCRIPTION:
Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally. Brian wants to order something that Anna is allergic to though, and they agree that Anna won't pay for that item. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

For example, assume the bill has the following prices: . Anna declines to eat item  which costs . If Brian calculates the bill correctly, Anna will pay . If he includes the cost of , he will calculate . In the second case, he should refund  to Anna.

EXAMPLES:

Sample Input 0

4 1
3 10 2 9
12

Sample Output 0

5
*/

function bonAppetit(bill, k, b) {
    //console.log(bill, k, b)
    let sum = 0;
    for (let i = 0; i < bill.length; ++i) {
        if (i !== k) {
            sum += bill[i];
        }
    }
    console.log(sum/2)
    console.log(b)

    if (sum / 2 === b) {
        return 'Bon Appetit'
    }
    return (b*2-sum)/2
}
let ar = [3, 10, 2, 9]

console.log(bonAppetit(ar, 1, 12))