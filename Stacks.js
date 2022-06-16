// Stack Implementation.....
// using functions...

// function Stack(){
//     this.dataStore=[];   //[1,]
//     this.top= 0;
//     this.push =push;
//     this.pop=pop;
//     this.peek=peek;
// }

// function push(element){
//     this.dataStore[this.top++]=element;
// }

// function pop(){
//     return this.dataStore[--this.top];
// }

// function peek(){
//     return this.dataStore[this.top-1];
// }
// function length(){
//     return this.top;
// }
// function clear(){
//     this.top=0;
// }

// var s = new Stack();
// // var d =new Stack()
// s.push("A"); 
// s.push("B"); 
// s.push("C"); 
// s.push("D"); 
// console.log(s)
// console.log(s.peek())
// var popped= s.pop();
// console.log(popped)
// console.log(s.peek())

// // implementing stack using class OOPS;

class Stack {    // this is Class.
    constructor() {
        this.items = [];
    }
    add(element) {
        return this.items.push(element);
    }
    remove() {
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
    printStack() {
        var str = "";
        for (var i = 0; i < this.items.length; i++) {
            str += this.items[i] + ",";
        }
        return str;
    }
    sum(){
        var sum=0;
        for(let i=0; i<this.items.length;i++){
            sum+= this.items[i];
        }
        return sum;
    }
}

let newStack= new Stack();  // this is Object of that class;

// console.log(newStack.isEmpty());  // initially empty;

newStack.add(1);
newStack.add(2);
newStack.add(3);
newStack.add(4);
// newStack.add("5");

console.log(newStack.sum())

// console.log(newStack);

// var peeking= newStack.peek();
// console.log(peeking,typeof peeking);

// var newPopped= newStack.remove();
// console.log(newPopped);

// var sizeOfStack = newStack.size()
// console.log(sizeOfStack);

// //print Stack;
// var print1= newStack.printStack();
// console.log(print1)

// newStack.clear();
// console.log(newStack);

// console.log(newStack.peek());

// newStack.add("cynthia");
// console.log(newStack.size());

// console.log(newStack.peek());

//===============================================================================================================//

// Several Problems Solving using Stack ..

//Q.1 Multiple Base Conversion...
// convert  a number to given base b




// Q.2 Check is Palindrome 

function isPanlindrome(word) {
    var st = new Stack();
    for (var i = 0; i < word.length; i++) {
        st.add(word[i]);
    }
    var rword = "";
    while (st.size() > 0) {
        rword += st.remove();
    }
    if (word == rword) {
        return true;
    } else {
        return false;
    }
}

var word = "racecar";
if (isPanlindrome(word)) {
    console.log(`true , ${word} is a Palindrome.`);
} else {
    console.log(`no it is not`);
}

// //Q.3 Reverse string and array using stack

function reverseString(str) {
    var stack = new Stack();
    for (var i = 0; i < str.length; i++) {
        stack.add(str[i]);
    }
    console.log(stack.printStack())
    var reverseStr = "";

    while (stack.size() > 0) {
        reverseStr += stack.remove();
    }
    return reverseStr;
}

var str = "";
var result = reverseString(str);
console.log(result);

console.log(`Original String: ${str} and reverse String : ${result}`)


// function reverseArr(arr){
//     var s= new Stack();
//     for(var i =0; i<arr.length;i++){
//         s.add(arr[i]);
//     }
//     var reverseArr=[];
//     while(s.size()>0){
//         reverseArr.push(s.remove());
//     }
//     return reverseArr;
// }

// var arr1=[1,2,3,4,5];
// var result1= reverseArr(arr1);

// console.log(result1)

// factorial of N;

// function factorial(n) {
//     var s = new Stack();
//     for (var i = 1; i <= n; i++) {
//         s.add(i);
//     }
//     var factorialofN = 1;
//     while (s.size() > 0) {
//         factorialofN *= (s.remove());
//     }
//     return factorialofN
// }

// let n = 1;
// var result2 = factorial(n);

// console.log(result2);