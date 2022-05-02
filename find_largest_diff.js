// Algorithm to find Largest Difference in Array..
// (Largest Diff= Arr[Max] - Arr[Min])

// Time Complexity f(n)=O(2n) ~ O(n);

const findDiff = (arr) => {
    let max = 0;
    for (var i in arr) {
        if (arr[i] > max) {
            max = arr[i];
        } else {
            continue
        }
    }
    let min = max;
    for (var i in arr) {
        if (arr[i] < min) {
            min = arr[i];
        } else {
            continue
        }
    }
    return console.log(`The largest Difference in Array : ${max - min}`);
}
const measureTime = () => {
    console.time("findDiff()");
    findDiff([50,76,5,78,90,1]);
    console.timeEnd("findDiff()")
}
measureTime()
