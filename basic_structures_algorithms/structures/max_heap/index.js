class MaxHeap{
    constructor(){
        this.heap = [];
    }
    
    pushInHeap(item){
        this.heap.push(item);
        let itemIndex = this.heap.length - 1; 
        while(itemIndex > 0){
            let parentIndex = Math.floor((itemIndex - 1) / 2);
            if(this.heap[itemIndex] <= this.heap[parentIndex]){ break;}
            let bufferValue = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[itemIndex];
            this.heap[itemIndex] = bufferValue;
            itemIndex = parentIndex;
        }
    }
    
    extractMax(){
     let max = heap[0];
     this.heap[0] = this.heap.pop();
     sinkDown();
     return max;
    }
    
    sinkDown(index){
        let left = index*2 + 1;
        let right = index*2 + 2;
        let coppyIndex = index;
        
        if(coppyIndex <= this.heap.length && this.heap[coppyIndex] < this.heap[left]){ coppyIndex = left;}
        if(coppyIndex <= this.heap.length && this.heap[coppyIndex] < this.heap[right]){ coppyIndex = right;}
        
        if(index !== coppyIndex){
            let bufferValue = this.heap[coppyIndex];
            this.heap[coppyIndex] = this.heap[index];
            this.heap[index] = bufferValue;
        }
    }
}

let heap = new MaxHeap();