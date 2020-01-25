function test (arr) {
    let coppyArr = arr.slice();
    coppyArr.sort((a,b) => a-b);
    let checkerObj ={};
    let keepPos = 0;
    for( let i=0; i < coppyArr.length; i++){   
       // console.log(lastValue)
        if(checkerObj[`${coppyArr[i]}`]){
            checkerObj[`${coppyArr[i]}`] = keepPos;
        } else{
            checkerObj[`${coppyArr[i]}`] = ++keepPos;
        }
    }

    for(let i = 0; i < arr.length; ++i ){
        let buffValue = checkerObj[`${arr[i]}`];
        arr[i] = buffValue;
    }
        
    return arr;
}

console.log(test([37,12,28,9,100,56,80,5,12]));