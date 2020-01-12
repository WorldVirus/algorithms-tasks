/** LINK: https://leetcode.com/problems/hand-of-straights/
 * 
 *  EXAMPLES:
 *  Input: hand = [1,2,3,6,2,3,4,7,8], W = 3
 *  Output: True
 */
function handOfStraights(hand, W) {

    if (hand.length % W !== 0) {
        return false;
    }

    let checkerObj = {};
    let partSize = hand.length / W;
    for (let i = 0; i < hand.length; ++i) {

        if (checkerObj[`${hand[i]}`]) {
            if (checkerObj[`${hand[i]}`] > partSize) {
                return false;
            }
            checkerObj[`${hand[i]}`] += 1;;
        } else {
            checkerObj[`${hand[i]}`] = 1;
        }

    }
    
    while (Object.keys(checkerObj).length > 0) {
        let first = parseInt(Object.keys(checkerObj)[0]);
        for (let i = first; i < first + W; ++i) {
            if (!checkerObj[i]) {
                return false
            };
            if (checkerObj[i] === 1) delete checkerObj[i];
            else checkerObj[i] -= 1;
        }

    }

    return true;
}

console.log(handOfStraights([1, 1, 2, 2, 3, 3], 2));