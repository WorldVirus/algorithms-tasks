class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.color = 'red';
    }
}

class Bst {
    constructor() {
        this.root = null;
    }

    _flipColors(node){
        node.color = 'red';
        node.left.color = 'black';
        node.right.color = 'black';
    }

    _rotateLeft(node){
        let bufferValue = node.right;
        node.right = bufferValue.left;
        bufferValue.left = node;
        bufferValue.color = node.color;
        node.color = 'red';
        return bufferValue;
    }

    _rotateRight(node){
        let bufferValue = node.left;
        node.left = bufferValue.right;
        bufferValue.right = node;
        bufferValue.color = node.color;
        node.color = 'red';
        return bufferValue;
    }

    getValue(value) {
        let currentNode = this.root;
        while (!currentNode) {
            if (currentNode.value > value) {
                currentNode = currentNode.left
            } else if (currentNode.value < value) {
                currentNode = currentNode.right;
            } else {
                return currentNode.value;
            }
        }

        return null;
    }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }

        let currentNode = this.root;
        let newNode = new Node(value);

        while (currentNode) {
            if (currentNode.value > value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    break;
                } else {
                    currentNode = currentNode.left
                }
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }

        if (currentNode.right.red === 'red' && currentNode.left.color !== 'red') currentNode = this._rotateLeft(currentNode)
        if (currentNode.right.red !== 'red' && currentNode.left.color === 'red') currentNode = this._rotateRight(currentNode)
        if (currentNode.right.red === 'red' && currentNode.left.color === 'red') currentNode = this._flipColors(currentNode)
    }
}
