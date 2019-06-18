function binarySearch(arr, k) {
    let first = 0;
    let last = arr.length - 1;
    while (first <= last) {
        let median = Math.floor((last - first) / 2) + first;

        if (k === arr[median]) return true;
        else if (k < arr[median]) {
            last = median - 1;
        } else if (k > arr[median]) {
            first = median + 1;
        }
    }

    return false;
}

console.log(binarySearch([-40,-20,-10,0 ,5,10,30,40],30));