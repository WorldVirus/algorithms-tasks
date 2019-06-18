class StackArrayImplementation{
    constructor(){
        this.array = [];
        this.size = 0;
    }
     
    pushElement(element){
        this.array[this.size++] = element;
        //this.array.push(element);
    }
    popElement(){
        if(!this.size)
            return 'Hey underflow';
        return this.array[--this.size];
        //this.array.pop();
    }

    isEmpty(){ return this.size === 0;}
}

let test = new StackResizeArrayImpl();
test.pushElement(1);
console.log(test.array)
console.log(test.isEmpty())
console.log(test.popElement());
console.log(test.array)

