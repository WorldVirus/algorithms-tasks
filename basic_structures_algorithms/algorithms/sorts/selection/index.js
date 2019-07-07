function selectionSort(arr){
    for(let i = 0; i < arr.length-1; ++i){
        let bufferMin = arr[i];
        let bufferIndex = i;
        for(let j = i; j < arr.length; ++j ){
            if(bufferMin > arr[j]){
                bufferMin = arr[j];
                bufferIndex = j;
            }
        }
        let swap = arr[bufferIndex];
        arr[bufferIndex] = arr[i];
        arr[i] = swap;
    }

    return arr;
}

console.log(selectionSort([21,12,32,14,78,9]));
