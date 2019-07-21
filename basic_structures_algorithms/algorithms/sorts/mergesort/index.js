let arr = [21, 12, 32, 14, 78, 9];
let coppyArr = [];

function merge(arr, first, middle, end) {

    for(let i = first; i <= end; ++i)
        coppyArr[i] = arr[i];

    let i = first;
    let j = middle + 1;

    for(let index = first; index <= end; ++index){
        if(i > middle) arr[index] = coppyArr[j++];
        else if( j > end) arr[index] = coppyArr[i++];
        else if (coppyArr[i] > coppyArr[j]) arr[index] = coppyArr[j++];
        else arr[index] = coppyArr[i++];
    }

}

function sort(arr, first, end) {
    if (end <= first)
        return;

    let middle = first + Math.floor((end - first) / 2);

    sort(arr, first, middle);
    sort(arr, middle + 1, end);
    merge(arr, first, middle, end)
}

function mainSort(arr) {
    sort(arr, 0, arr.length - 1);
}

mainSort(arr);
console.log(arr);
