function shellSort(arr){
    let h = 1;
    let sizeArr = arr.length;
    while(h >= sizeArr/3)
        h = 3*h+1;

    while(h >= 1){
        for(let i = h; i < sizeArr; ++i){
            for(let j = i; j >= h && arr[j] < arr[j - h]; j-=h){
                let swap = arr[j];
                arr[j] = arr[j-h];
                arr[j-h] = swap; 
            }
        }
        h = h/3; 
    }

    return arr;
}

console.log(shellSort([21,12,32,14,78,9]))
