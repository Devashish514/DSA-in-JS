// Quick Sorting Algorithm....


function quickSort(arr) {
    if (arr.length <= 1) {    // condition to break infinite recursion...
        return arr;
    }
    // console.log("median", Math.floor(arr.length / 2));
    const pivot = arr[Math.floor(arr.length / 2)];
    const less = [];
    const equal = [];
    const greater = [];

    for (let element of arr) {
        if (element < pivot) {
            less.push(element);
        } else if (element === pivot) {
            equal.push(element);
        } else {
            greater.push(element);
        }
    }

    return [...quickSort(less), ...equal, ...quickSort(greater)];
}

// Example usage:
const array = [6, 4, 3, 7, 1, 9, 5];
const sortedArray = quickSort(array);
console.log("FirstMethod ==> ",sortedArray);  // Output: [1, 2, 3, 4, 5, 6];


// Other Method ..

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

function quickSort2(arr) {
    return helperFunc(arr, 0, arr.length - 1);
}
function helperFunc(arr, l, r) {
    let i;
    if (arr.length > 1) {
        i = partition(arr, l, r);
        if (l < i - 1) {
            helperFunc(arr, l, i - 1);
        }
        if (i < r) {
            helperFunc(arr, i, r);
        }
    }
    return arr;
}
function partition(arr, l, r) {
    var pivot = arr[Math.floor((l + r) / 2)];
    while (l <= r) {
        while (pivot > arr[l]) {
            l++;
        }
        while (pivot < arr[r]) {
            r--;
        }
        if (l <= r) {
            swap(arr, l, r);
            l++;
            r--;
        }
    }
    return l;
}

// Driver Code;
let result = quickSort2([6, 4, 3, 7, 1, 9, 5]);
console.log("Other Method ==> ",result)

