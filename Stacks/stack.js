// Implementing Stack ...
// A stack is a list of elements that are accessible only from one end of the list, which is the top.
// LIFO - "Last In First out" Data Structure.

/**
 * Two Primary Methods of a Stack are Adding and removing elements off a Stack using Push() & Pop();
 * Peek() => Returns the value Stored at the top, Without Removing it from the top.
 * clear() => Removes all the Elements from a Stack..
 * isEmpty() => To check Whether the Stack is Empty!
 * we can also use Size() 
 */

class Stack {
    constructor() {
        this.items = [];
    }

    add(element) {
        return this.items.push(element);
    }
    remove() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    clear() {
        return this.items = [];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    printStack() {
        var str = "";
        for (var i = 0; i < this.items.length; i++) {
            str += this.items[i] + ",";
        }
        return str;
    }
    sum() {
        var sum = 0;
        for (let i = 0; i < this.items.length; i++) {
            sum += this.items[i];
        }
        return sum;
    }
}

let newStack = new Stack();  // this is Object of that class;

console.log("isEmpty => ", newStack.isEmpty());  // initially empty;

newStack.add(1);
newStack.add(2);
newStack.add(3);
newStack.add(4);
newStack.add(5);

console.log("newStack", newStack);
console.log("peek => ", newStack.peek());
console.log("Sum of Stack", newStack.sum());
console.log("print Stack => ", newStack.printStack())
