/** LINK: https://www.hackerrank.com/challenges/hackerland-radio-transmitters/problem
 * 
 *  DESCRIPTION: Given a map of Hackerland and the transmission range, determine the minimum number of transmitters so that every house is within range of at least one transmitter. 
 *  Each transmitter must be installed on top of an existing house.
 * 
 *  Sample Input 0

    2
    7 2 4 6 5 9 12 11

    Sample Output 0

    3
 * 
 */

function hackerlandRadioTransmitters(x, k) {
    let counter = 0;

    x.sort((a,b)=> {return a >b});
    let i = 0;
    let sizeArray =  x.length;
    while(i < sizeArray){
        let firstPart = x[i] + k;
        while(i < sizeArray && firstPart >= x[i]) ++i;
        let secondPart = x[--i ]+ k;
        while(i < sizeArray && secondPart >= x[i]) ++i;
        ++counter;
    }
   
    return counter;
}

console.log(hackerlandRadioTransmitters([7,2,4,6,5,9,12,11],2))
