function minStartValue (nums) {
    let index = 1;
    
    while(index){
        let flag = true;
        let buf = index;
        for(let i = 0; i < nums.length; ++i){
            buf += nums[i];
            if(buf < 1){
                flag = false;
                break;
            }
        }
        
        if(flag){
            return index;
        }
        ++index;
    }
};

console.log(minStartValue([-22,-29,-21,0,-4,-26,10,-11,-14,-11]));

function findMinFibonacciNumbers(k) {
    let first = 1;
    let next = 1;
    let ar = [1];
    while(next <= k){
        if(next === k){return 1;}
        let buf = next;
        next = next + first;
        first = buf;
        ar.push(next);
    }

    // greedy
   let answer = 0;
   for (let i = ar.length - 1; i >= 0; i--){ 
       while (k >= ar[i])  
       { 
           k -= ar[i]; 
           ++answer; 
       } 
   } 

    return answer;

    // dynamic solution did not passed
    // let buf = {};
    // let index = 1;
    
    // while(index <= k){
    //     buf[`${index}`] = 0;
    //     let min = ar[ar.length - 1];
    //     for(let i=0; i < ar.length; ++i){
    //         if(ar[i] === index){min = 1; break;}
    //         else if(ar[i] > index){break;}
    //         else if(buf[`${index - ar[i]}`]){
    //             min = Math.min(min, buf[`${index - ar[i]}`] + 1);
    //         }
    //     }
    //     buf[`${index}`] = min;
    //     ++index;
    // }
    // return buf[`${k}`];
};

console.log(findMinFibonacciNumbers(19))

// permutation probleam

function getHappyString(n, k) {
    let answer = [];
   function permute(a, l, r){  
    if (l === r)  {
        answer.push(a);
    }
    else  {  
        for (let i = l; i <= r; i++)  
        {  
  
            let buf = a[l];
            a[l] = a[r]
            a[r] = buf;
  
            permute(a, l+1, r);  
  
             let test = a[l];
            a[l] = a[r]
            a[r] = test;
        }  
    }  
}
    let str = "abc";  
    permute(str, 0, n-1); 
    
    return answer[k-1] ? answer[k-1]:""
};