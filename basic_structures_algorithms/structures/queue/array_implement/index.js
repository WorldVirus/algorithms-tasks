class QueueArrayImplementation{
    constructor(){
        this.array = [];
        this.size = 0;
    }
    
    enqueue(value){
      this.array[this.size++] = value;
       //this.array.push(element);
    }

    dequeue(){
        if(!this.size)
         return 'Hey underflow';
         --this.size;
       return this.array.shift();
    }
}

let queueArrayImplementation = new QueueArrayImplementation();
queueArrayImplementation.enqueue('12');
queueArrayImplementation.enqueue('13');
console.log(queueArrayImplementation);
queueArrayImplementation.dequeue();
console.log(queueArrayImplementation);
