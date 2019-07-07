function insertionSort(arr){
    for (let i = 0; i < arr.length; ++i){
        for(let j = i; j >= 0  && arr[j] < arr[j-1];--j){
            let swap = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = swap;
        }
    }

    return arr;
}

console.log(insertionSort([21,12,32,14,78,9]));
