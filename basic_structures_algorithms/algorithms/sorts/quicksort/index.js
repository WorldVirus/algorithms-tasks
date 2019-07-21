let arr = [21,12,32,14,78,9];

function partion(arr,first,end){
    let i = first;
    let j = end+1;
    while(true){
        while(arr[++i] < arr[first]){
            if(i === end) break;
        }

        while(arr[--j] > arr[first]){
            if(j === first) break;
        }

        if(j<=i) break;

        let bufferSwap = arr[i];
        arr[i] = arr[j];
        arr[j] = bufferSwap; 
    }

    let bufferFinalSwap = arr[first];
    arr[first] = arr[j];
    arr[j] = bufferFinalSwap;
    
    return j;
};

function sort(arr, first, end) {
    if (first >= end)
        return;

    let j = partion(arr, first, end);

    sort(arr, first, j - 1);
    sort(arr, j + 1, end);
};

function mainSort(arr){
     sort(arr,0,arr.length-1);
};

mainSort(arr);
console.log(arr)
