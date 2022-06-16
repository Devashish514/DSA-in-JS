// prime factorization for any number N;
const readLine = require("readline-sync");
function primeFactor(n) {
    //If N is Even...
    while (n % 2 == 0) {
        console.log(2);
        n = n / 2;
    }
    //If N is Odd....
    for (var i = 3; i * i <= n; i = i + 2) {
        while (n % i == 0) {
            console.log(i);
            n = n / i;
        }
    }
    //If n is prime Number....
    if (n > 2) {
        console.log(n);
    }
}
const n = readLine.question("Enter Number..?");
const measureTime = () => {
    console.time("primeFactor()");
    primeFactor(n);
    console.timeEnd("primeFactor()");
}
measureTime()