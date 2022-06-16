// implementsting Linked List 
// functional appraoch..

//node class
function Node(element){
    this.element=element;
    this.next=null;
}

// linked list class
function LList(){
    this.head= new Node("head");
    this.find=find;
    this.insert=insert;
    // this.remove=remove;
    this.display=display;
}
function find(item){
    var currNode= this.head;
    while(currNode.element != item){
        currNode=currNode.next;
    }
    return currNode;
}
function insert(newElement,item){
    var newNode= new Node(newElement);
    var current= this.find(item);
    newNode.next=current.next;
    current.next=newNode;
}
function display(){
    var currNode= this.head;
    while(!(currNode.next==null)){
        console.log(currNode.next.element);
        currNode= currNode.next;
    }
}

// var cities = new LList();
// cities.insert("conway","head");
// cities.insert("London","conway");
// cities.insert("new York","London");
// cities.insert("Mumbai","new York");
// cities.display()


// class approach...

//Singly Linked List

//Node class..
// class Node {
//     constructor(element) {
//         this.element = element;
//         this.next = null;
//     }
// }

// //LL class.....
// class LinkedList {
//     constructor() {
//         this.head = new Node("head");
//     }
//     find(item) {
//         var currNode = this.head;
//         // console.log(currNode);
//         while (currNode.element != item) {
//             currNode = currNode.next;
//         }
//         return currNode;
//     }
//     insert(newElement, item) {
//         var newNode = new Node(newElement);
//         var currentNode = this.find(item);
//         newNode.next = currentNode.next;
//         currentNode.next = newNode;
//     }
//     display() {
//         var currNode = this.head;
//         while (!(currNode.next == null)) {
//             console.log(currNode.next.element);
//             currNode = currNode.next;
//         }
//     }
//     findPrevious(item){
//         var currNode= this.head;
//         while(!(currNode.next==null)&&(currNode.next.element!=item)){
//             currNode = currNode.next;
//         }
//         return currNode;
//     }
//     remove(item){
//         var prevNode= this.findPrevious(item);
//         if(!(prevNode.next == null)){
//             prevNode.next = prevNode.next.next;
//         }
//     }
// }

// let l = new LinkedList();

// l.insert(2, "head");
// l.insert(3, 2);
// l.insert(4, 3);

// l.display();
// console.log(l.find("head"));

// // remove node

// l.remove(2)
// l.display()
// console.log(l.find("head"));

// // console.log(l.find(2));
// // console.log(l.find(3));
// // console.log(l.find(5));


// Doubly linked List....

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}


class doublyLL {
    constructor() {
        this.head = new Node("head");
    }
    find(item) {
        var currNode = this.head;
        // console.log(currNode);
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    insert(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next= current.next;
        newNode.previous= current;     // changed here....
        current.next = newNode;
    }
    remove(item){
        var currNode= this.find(item);
        if(!(currNode.next==null)){
            currNode.previous.next=currNode.next;
            currNode.next.previous=currNode.previous;
            currNode.next= null;
            currNode.previous=null;
        }else{
            currNode.previous.next=currNode.next;
            currNode.previous=null;
        }
    }
    findLast(){
        var currNode = this.head;
        while(!(currNode.next==null)){
            currNode=currNode.next;
        }
        return currNode;
    }
    dispReverse(){
        var currNode= this.head;
        currNode= this.findLast();
        while(!(currNode.previous==null)){
            console.log(currNode.element);
            currNode=currNode.previous;
        }
    }
}

var dLL= new doublyLL();
 
dLL.insert(2,"head")
dLL.insert(3,2)
dLL.insert(4,3)
dLL.insert(5,4);
// console.log(dLL.find(5))
// dLL.remove(5)
// console.log(dLL.find(4))
// dLL.remove(4)

// console.log(dLL.find("head"));
console.log(dLL.find(2));

dLL.dispReverse()