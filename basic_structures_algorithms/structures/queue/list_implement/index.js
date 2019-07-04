class LinkedList {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class QueueListImplementation {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(value) {
        let newNode = new LinkedList(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }

    dequeue() {
        if (!this.head)
            return 'Empty';

        let deleteData = this.head.data;
        this.head = this.head.next;
        return deleteData;
    }
}

let queueListImplementation = new QueueListImplementation();
queueListImplementation.enqueue('12');
queueListImplementation.enqueue('13');
queueListImplementation.enqueue('11');
console.log(queueListImplementation);
console.log(queueListImplementation.dequeue());
console.log(queueListImplementation);
