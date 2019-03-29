/**LINK: https://www.hackerrank.com/challenges/grading/problem
 * DESCRIPTION: Sam is a professor at the university and likes to round each student's  according to these rules:
    If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
    If the value of  is less than , no rounding occurs as the result will still be a failing grad

 * EXAMPLES:
 * 
 * Sample Input 0

    4
    73
    67
    38
    33

    Sample Output 0

    75
    67
    40
    33
 */

function gradingStudents(grades) {
    for (let i = 0; i < grades.length; ++i) {
        if (grades[i] >= 38 && (5 - grades[i] % 5) < 3)
            grades[i] = grades[i] + 5 - grades[i] % 5;
    }

    return grades;
}

let arr = [73,67,38,33];

console.log(gradingStudents(arr));
