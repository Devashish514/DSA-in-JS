// Algorithm for printing Fibonnacci Series for Number(n)

//Iterative
const readLine = require("readline-sync");
const chalk = require("chalk");

const fibo = (num)=>{
    console.log(chalk.green("Initiallizing Fibonacci Sequence......"));
    let n1 = 0, n2 = 1, nextTerm;
    for(let i=0; i <= num; i++){
        console.log(chalk.yellow(n1) );
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}
const input= readLine.question( "Enter Number..?");
const measureTime= ()=>{
    console.time("fibo()")
    fibo(input);
    console.timeEnd("fibo()")
}
measureTime()



// Recursive... Approach -1
const fiboN= (n)=>{
    if(n<=1){
        return n
    }else{
        return fiboN(n-1)+fiboN(n-2);
    }}
// measure time for same Input
const measureTimeRec= ()=>{
    console.time("fiboN()")
    console.log(chalk.red(fiboN(input)))
    console.timeEnd("fiboN()")
}
measureTimeRec()
// Better Way.. Approach -2
const fiboN2= (n,last2,last)=>{
    if(n==0){
        return last2;
    }
    if(n==1){
        return last;
    }
    return fiboN2(n-1,last,last2+last);
}
const measureTimeRec2= ()=>{
    console.time("fiboN2()")
    console.log(chalk.green(fiboN2(input,0,1)))
    console.timeEnd("fiboN2()")
}
measureTimeRec2()






















//example method....

// function fibonacci(n) {
//     return n < 1 ? 0
//          : n <= 2 ? 1
//          : fibonacci(n - 1) + fibonacci(n - 2)
//  }
 
//  console.log(fibonacci(4))

 //flow chart...

// fibonacci(4)   .--------> 2 + 1 = 3
// |          /               |
// '--> fibonacci(3) + fibonacci(2)
//       |    ^           
//       |    '----------- 2 = 1 + 1 <----------.
// 1st step -> |                     ^                |
//       |                     |                |
//       '---->  fibonacci(2) -' + fibonacci(1)-'