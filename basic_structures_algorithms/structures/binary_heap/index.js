let arr = [21, 12, 32, 14, 78, 9];

class BinaryHeap {
    constructor() {
        this.data = [21, 12, 32, 14, 78, 9];
        this.size = 7;
    }

    _swapElement = (firstIndex, secondIndex) => {
        let bufferSwapValue = this.data[firstIndex];
        this.data[firstIndex] = this.data[secondIndex];
        this.data[secondIndex] = bufferSwapValue;
    }

    _sink = (removeIndex) => {
        while (removeIndex * 2 <= this.size) {
            let index = 2 * removeIndex;
            if (index < this.size && this.data[index] < this.data[index + 1]) ++index;
            if (this.data[removeIndex] > this.data[index]) break;
            this._swapElement(removeIndex, index);
            removeIndex = index;
        }
    }

    _swim = (insertIndex) => {
        while (insertIndex > 1 && this.data[insertIndex] > this.data[Math.floor(insertIndex)]) {
            this._swapElement(insertIndex, Math.floor(insertIndex / 2))
            insertIndex = Math.floor(insertIndex / 2);
        }
    }

    heapSort(){
        for(let index = this.size/2; index >= 1; --index)
            this._sink(this.data[index]);

        while(this.size > 1){
            this._swapElement(1,this.size--)
            this._sink(this.size)
        }
    }
    
    insertion(dataInsert) {
        this.data[++this.size] = dataInsert;
        this._swim(this.size);
    }

    remove() {
        if (this.size > 0) {
            let max = this.data[1];
            this._swapElement(1, this.size--);
            this._sink(1);
            this.data[this.size + 1] = null;
            return max;
        } else {
            return 'Binary Heap is alredy empty';
        }
    }
}

let binaryHeap = new BinaryHeap();
// for(let i = 0; i < arr.length; ++i)
// binaryHeap.insertion(arr[i]);

binaryHeap.data.sort();

console.log(binaryHeap.data)
