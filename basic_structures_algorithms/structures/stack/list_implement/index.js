class LinkedList {
    constructor(value) {
        this.nextItem = null;
        this.data = value;
    }
}

class StackListImplementation {
    constructor() {
        this.node = null;
    }

    pushElement(value) {
        let newNode = new LinkedList(value);
        if (this.node) {
            newNode.nextItem = this.node;
            this.node = newNode;
        } else {
            this.node = newNode;
        }
    }

    popElement() {
        if (!this.node) {
            return 'Impossible delete';
        } else {
            let deleteData = this.node.data;
            this.node = this.node.nextItem;
            return deleteData;
        }
    }
}

let stackListImpl = new StackListImplementation();
stackListImpl.pushElement(10);
stackListImpl.pushElement(20);

console.log(stackListImpl);
stackListImpl.popElement();
console.log(stackListImpl);
