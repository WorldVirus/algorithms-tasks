function calc(num) {
    let answer = 0;
    while(num){
         num = num % 2 === 0 ? num /2: num - 1;
        ++answer;
    }
    return answer;
}

console.log(calc(14))