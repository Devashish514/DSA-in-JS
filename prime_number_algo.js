const readLine = require("readline-sync");
// Case 1- To check whether a Number is prime or Not....
// Time Complexity ==> O(n);

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
const n = readLine.question("Enter the Number.?");
// to print prime no. till n.
for(var i =1;i<n;i++){
    if(isPrime(i)){
        console.log(i)
    }
}

// Case 2 ===> Better Approach..
// Mathematically , All prime no. are in the form of 6x +- 1 except 2 and 3 ;
//ex= 19--> 6X3+1, 17--> 6x3-1; and so on..

// time complexity == O(sqrt(n));

function isPrime2(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 == 0 || n % 3 == 0) {
        return false;
    }
    for (var i = 5; i * i < n; i = i + 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}
isPrime2()

// const measureTime = () => {
//     console.time("isPrime()");
//     console.log(isPrime("5"));
//     console.timeEnd("isPrime()")
// }
// const measureTime2 = ()=> {
//     console.time("isPrime2()");
//     console.log(isPrime2(n));
//     console.timeEnd("isPrime2()")
// }
// measureTime()
// measureTime2()

function isPrime3(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n**2 % 24 == 1) {
        return true;
    }else{
        return false;
    }
}
const m =100;
for(let i=2;i<m;i++){
    if(isPrime3(i)){
        console.log(i);
    }
}




