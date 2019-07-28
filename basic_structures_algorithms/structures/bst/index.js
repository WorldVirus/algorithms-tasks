class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Bst {
    constructor() {
        this.root = null;
    }

    remove(deleteValue) {
        this.root = this._removeNode(this.root, deleteValue);
    }

    _removeNode(node, value) {
        if (!node)
            return 'Empty Tree';

        if (value > node.value) {
            node = this._removeNode(node.right, value);
            return node;
        } else if (value < node.value) {
            node = this._removeNode(node.left, value);
            return node;
        } else {
            if (!node.left) {
                node = node.right;
                return node;
            }
            if (!node.right) {
                node = node.left;
                return node;
            }

            let bufferData = this.getValue(this.node.right.value);
            node.value = bufferData;
            node.right = this._removeNode(node.right, bufferData)
            return node;
        }
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
    }
}
