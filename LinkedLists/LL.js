// Single Linked List..


class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
};

class SLL {
    constructor() {
        this.head = new Node('head');
    }
    find(item) {
        var currNode = this.head;
        // console.log("currNode", currNode);
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    insert(newElement, item) {
        var newNode = new Node(newElement);
        var currentNode = this.find(item);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    display() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
    findPrevious(item) {
        var currNode = this.head;
        while (!(currNode.next == null) && (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    }
    remove(item) {
        var prevNode = this.findPrevious(item);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    }
}

let list1 = new SLL();

list1.insert(1, "head");
list1.insert(2, 1);
list1.insert(3, 2);

list1.display();

list1.remove(2);

list1.display();

console.log(list1.find("head"));
