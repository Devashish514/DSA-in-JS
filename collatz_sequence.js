const readLine=require("readline-sync");

let collatz= (n)=>{
    while(n!=1){
        console.log(n);

        if(n%2==0){
            n=n/2;
        }else{
            n=(n*3)+1;
        }
    }
    console.log(n)  //to print 1.
}
// let n = readLine.question("Enter Number.?");
collatz(50)