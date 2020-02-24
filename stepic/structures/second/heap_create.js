class Heap{
    constructor(){
        this.heapArr = [];
    }

    sink(index){
        let left = 2*index + 1;
        let right = 2*index +2;
        if(left < this.heapArr.length && this.heapArr[left] > this.heapArr[index]){
            let buffer = this.heapArr[index];
            this.heapArr[index] = this.heapArr[left];
            this.heapArr[left] = buffer;
            this.sink(left);
        }

        if(right < this.heapArr.length && this.heapArr[right] > this.heapArr[index]){
            let buffer = this.heapArr[index];
            this.heapArr[index] = this.heapArr[right];
            this.heapArr[right] = buffer;
            this.sink(right)
        }
    }

    heapCreate(arr){
        this.heapArr.slice(arr);
        let size = Math.floor(this.heapArr.length / 2) - 1 
        for(let i = size; i >= 0; --i){
            this.sink(i)
        }
    }
}


function main(arr){
    const obj = new Heap();
    obj.heapCreate(arr);
    return obj.heapArr;
}

console.log(main(1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17 ))