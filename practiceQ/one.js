// factorial using recursion...

function fac(n) {
    if (n == 1 || n == 0) {
        return 1;
    }
    return n * fac(n - 1);
}

console.log("factorial using recursion..", fac(5));


//fibonacci sequence....

function fibo(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibo(n - 1) + fibo(n - 2);
}

console.log("fibo", fibo(6));



// find largest differnece in array

const diff = (arr) => {
    let max = 0;
    for (var i in arr) {
        if (arr[i] > max) {
            max = arr[i];
        } else {
            continue;
        }
    }
    let min = max;
    for (var i in arr) {
        if (arr[i] < min) {
            min = arr[i];
        } else {
            continue;
        }
    }
    return max - min;
}

console.log('diff', diff([50, 76, 5, 78, 90, 1]));


//prime number

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let n = 10

for (var i = 0; i < n; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}

// is Palindrome  and reverse array using stack..

class Stack {
    constructor() {
        this.items = [];
    }

    addElement(element) {
        return this.items.push(element);
    }
    remove(element) {
        return this.items.pop();
    }
    size() {
        return this.items.length;
    }
}


const s = new Stack();

s.addElement(1)
s.addElement(2)
s.addElement(3)
s.addElement(4)

function checkPalindrome(str) {
    const newStack = new Stack();
    for (let i = 0; i < str.length; i++) {
        newStack.addElement(str[i]);
    }
    let rvrStr = "";
    while (newStack.size() > 0) {
        rvrStr += newStack.remove();
    }
    console.log(rvrStr);
    if (str === rvrStr) {
        return true;
    }
    return false;
}

function reverseArr(arr) {
    const s = new Stack();
    for (let i = 0; i < arr.length; i++) {
        s.addElement(arr[i]);
    }
    var rArr = [];
    while (s.size() > 0) {
        rArr.push(s.remove());
    }
    return rArr;
}

console.log("reverseArr", reverseArr([1, 2, 3, 4, 5]));
console.log(checkPalindrome("racecar"));

