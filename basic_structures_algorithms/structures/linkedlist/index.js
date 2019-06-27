class LinkedList{
    constructor(){
        this.head = null;
        this.sizeList = 0;
    }

    addToHead(val){
        const newNode = {val};
        newNode.next = this.head;
        this.head = newNode;
        ++this.sizeList;
        return;
    }

    removeFromHead(){
        if(!this.sizeList)
            return false;
        const value = this.head.val;
        this.head = this.head.next;
        --this.sizeList;
        return value;
    }

    addToIndexPosition(value,index){
        if(index > this.sizeList)
            return 'Incorrect index';

        if(!index){
            this.addToHead(value);
            return;
        }

        let coppyHead = this.head;
        let nextHead = this.head.next;

        while(true){
            --index;
            if(!index){
                const newImportNode = {value};
                newImportNode.next = nextHead;
                coppyHead.next = newImportNode;
                ++this.sizeList;
                break;
            }

            coppyHead = nextHead;
            nextHead = nextHead.next;
        }
    }


    removeFromIndexPosition(index){
        if(index > this.sizeList )
            return 'Incorrect index';

        if(!index){
            this.removeFromHead();
            return;
        }

        let coppyHead = this.head;
        let nextHead = this.head.next;

        while(true){
            --index;   
            if(!index){
                coppyHead.next = nextHead.next;
                --this.sizeList;
                break;
            }

            coppyHead = nextHead;
            nextHead = nextHead.next;
        }
    }
}

let linkObj = new LinkedList();
linkObj.addToHead('13');
linkObj.addToHead('12');
linkObj.addToHead('11');

linkObj.addToIndexPosition('10',0)
console.log(linkObj);
linkObj.removeFromIndexPosition(1)
console.log(linkObj);
