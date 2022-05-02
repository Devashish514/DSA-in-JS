// Find Smallest Number in Array...
// Time Complexity f(n)= O(n);


const findMin = (arr) => {
    let min = arr[0];
    for (var i in arr) {
        if (arr[i] < min) {
            min = arr[i];
        } else {
            continue;
        }
    }
    return console.log(min);
}
// Calculating time 
const measureTime = () => {
    console.time("findMin()");
    findMin([2, 55, 67, 89, 5, 10, 900, 50]);
    console.timeEnd("findMin()")
}
measureTime()