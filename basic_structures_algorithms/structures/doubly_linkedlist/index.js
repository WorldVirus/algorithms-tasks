class DoublyLinkedList {
    constructor() {
        this.sizeList = 0;
        this.head = null;
        this.tail = null;
    }

    addToTail(val) {
        const newNode = { val };
        if (!this.sizeList) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        ++this.sizeList;
    }

    addToIndexPosition(val, index) {
        if (index > this.sizeList || index < 0)
            return 'Incorrect index ';

        if (!index) {
            this.addToTail(val)
            return;
        } else {
            let currentValue = this.head;
            while (true) {
                if (--index === 0) {
                    const newNode = { val };
                    newNode.next = currentValue;
                    newNode.prev = currentValue.prev;
                    currentValue.prev.next = newNode;
                    currentValue.prev = newNode;
                    ++this.sizeList;
                    break;
                }
                currentValue = currentValue.next;
            }
        }
    }

    removeFromIndexPosition(index) {
        if (index > this.sizeList || index < 0)
            return 'Incorrect index';

        --this.sizeList;

        let current = this.head;
        if (current === this.tail) {
            this.tail = this.tail.prev;
            this.tail.next = null;
            return;
        }

        if (!index) {
            this.head = this.head.next;
            this.head.prev = null;
        } else {
            while (current) {
                if (--index === 0) {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                    break;
                }
                current = current.next

            }
        }
    }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.addToTail('12');
doublyLinkedList.addToTail('13');

doublyLinkedList.addToIndexPosition('10', 2);
console.log(doublyLinkedList);
doublyLinkedList.removeFromIndexPosition(2);
console.log(doublyLinkedList);
