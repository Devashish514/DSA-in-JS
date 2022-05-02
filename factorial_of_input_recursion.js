// Algorithm to find Factorial of any Number Recursively...
//
const chalk = require("chalk");
const readLine = require("readline-sync")
const fac = (n) => {
    if (n == 1) {   //base Condition
        return 1;
    } else {
        return n * fac(n - 1);
    }
}
const n = readLine.question(chalk.yellow("Enter Number..? "));

const measureTime = () => {
    console.time("fac()");
    console.log(chalk.green(`Factorial of ${n} : ${fac(n)}`));
    console.timeEnd("fac()");
}
measureTime()