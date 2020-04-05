function countLargestGroup(n) {
    let fillMap = {};
    let max = 0;
    let answer = 0;
    for(let i = 1; i <= n; ++i){
        let index = i;
        let sum = 0;
        while(index >= 1){
            sum += index % 10;
            index = Math.floor(index/10);
        }
        if(!fillMap[`${sum}`]){
            fillMap[`${sum}`] = 0;
        }
        ++fillMap[`${sum}`];
        if(fillMap[`${sum}`] === max){++answer;}
        if(fillMap[`${sum}`] > max){
            max = fillMap[`${sum}`];
            answer = 1;
        }
    }
    
    return answer;
};

console.log(countLargestGroup(24));