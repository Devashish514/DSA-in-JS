// Implementing Queue
// A Queue is a type of Data Structure where data are inserted at the end and are removed from the front...
// FIFO  = First In First Out

/**
 * queue operations:
 * enqueue() => used to insert new element into the end of the queue
 * dequeue() => used to remove element from  the front of the queue
 * peek() => viewing the element at the front of a queue.
 * size() => to get size of queue.
 * clear() => remove all elements from a queue
 */


class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        return this.items.push(element);
    }
    dequeue() {
        return this.items.shift();
    }
    front() {
        return this.items[0];
    }
    back() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        if (this.items.length === 0) {
            return true;
        }
        return false;
    }
    clear() {
        return this.items = [];
    }
    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++) {
            str += this.items[i] + "\n";
        }
        return str;
    }
    size() {
        return this.items.length;
    }
}

let newQueue = new Queue();
console.log("isEmpty => ", newQueue.isEmpty());

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
newQueue.enqueue(5);

console.log("Queue", newQueue);

newQueue.dequeue();
console.log("front()", newQueue.front());
console.log("back => ", newQueue.back());
console.log("print queue => ", newQueue.printQueue());
console.log("Size => ", newQueue.size());