// Linear search..

function linearSearch(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (n === arr[i]) {
            return true;
        }
    }
    return false;
}

// console.log(linearSearch([0, 9, 10, 11, 7], 70));

// Binary search...
// for binary search , the array needs to be sorted..

function binarySearch(arr, n) {
    var i = 0;
    var j = arr.length - 1;

    while (i < j) {
        var mid = Math.floor((j + i) / 2);
        console.log(mid);
        if (arr[mid] === n) {
            return mid;
        }
        else if (n > arr[mid]) {
            i = mid + 1;
        }
        else {
            j = mid - 1;
        }
    }
    return -1;
}


let arr = [1, 3, 4, 5, 6, 7, 8, 9, 11];
console.log(binarySearch(arr, 9));