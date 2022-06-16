// implementation of queue ....
// function approach..

// function Queue(){
//     this.items=[];
//     this.enqueue=enqueue;
//     this.dequeue=dequeue;
//     this.front=front;
//     this.back=back;
//     this.toString=toString;
//     this.empty=empty;
// }

// function enqueue(element){
//     this.items.push(element);
// }

// function dequeue(){
//     return this.items.shift();
// }

// function front(){
//     return this.items[0];
// }
// function back(){
//     return this.items[this.items.length-1];
// }
// function toString(){
//     var str="";
//     for(var i =0; i<this.items.length;i++){
//         str+=this.items[i]+"\n";
//     }
//     return str;
// }
// function empty(){
//     if(this.items.length==0){
//         return true;
//     }else{
//         return false;
//     }
// }

// var q = new Queue();


// class based apprach

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
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
    size() {
        return this.items.length;
    }
    isEmpty() {
        if (this.items.length == 0) {
            return true;
        } else {
            return false;
        }
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
}

// var newQ= new Queue();

// console.log(newQ.isEmpty());

//========================================================================================================//

// Queues problems........
// Assigning partners at a square dance....
// for this problem we need to create a txt file...
const fs= require("fs");
const path= require("path");

function dancer(name,gender){
    this.name=name;
    this.gender=gender;
}

