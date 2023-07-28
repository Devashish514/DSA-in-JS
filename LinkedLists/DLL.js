// Implementing Doubly Linked List ....

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}


class DLL {
    constructor() {
        this.head = new Node("head");
    }
    find(item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    insert(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    }
    remove(item) {
        var currNode = this.find(item);
        if (!(currNode.next == null)) {
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
        } else {
            currNode.previous.next = currNode.next;
            currNode.previous = null;
        }
    }
    findLast() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            currNode = currNode.next;
        }
        return currNode;
    }
    displayReverse() {
        var currNode = this.head;
        currNode = this.findLast();
        while (!(currNode.previous == null)) {
            console.log(currNode.element);
            currNode = currNode.previous;
        }
    }
}

var dLL = new DLL();

dLL.insert(2, "head")
dLL.insert(3, 2)
dLL.insert(4, 3)
dLL.insert(5, 4);