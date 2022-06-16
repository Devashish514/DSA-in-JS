// Sorting..
// bubble sort

// swap is a helper function...
function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (arr[i] < arr[j]) {
                swap(arr, i, j);
            }
        }
    }
    return arr;
}

// console.log(bubbleSort([12,434,90,7,60,9,87,66,2]))

//===============================================================================================================//

// Selection sort
function SelectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        pos = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[pos]) {
                pos = j;
            }
        }
        if (i != pos) {
            swap(arr, i, pos)
        }
    }
    return arr;
}
// console.log(SelectionSort([12,434,90,7,60,9,87,66,2]))

//===============================================================================================================//
// // insertion sort...

// // general Algorithm...
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let val = arr[i];
        pos = i;
        while (pos > 0 && arr[pos - 1] > val) {
            arr[pos] = arr[pos - 1];
            pos = pos - 1;
            arr[pos] = val;
        }
    }
    return arr;
}
// console.log(insertionSort([12, 434, 90, 7, 60, 9, 87, 66, 2]))

// // Agorithm 2 for insertion sort; 
function insertionSort2(arr) {
    let n = arr.length;
    let value, i, j;
    for (i = 0; i < n; i++) {
        value = arr[i];
        for (j = i - 1; j > -1 && arr[j] > value; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = value;
    }
    return arr;
}
// console.log(insertionSort2([12, 434, 90, 7, 60, 9, 87, 66, 2]))

// ================================================================================================================//

// Quick Sorting...
function quickSort(arr) {
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
    return `coming from helperfunc ${arr}`;
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
let result = quickSort([6, 4, 3, 7, 1, 9, 5]);
// console.log(result)

//==================================================================================================================//

//  merge sorting...
function merge(arrL, arrR) {
    var result = [];
    let leftIndex = 0, rightIndex = 0;
    while (leftIndex < arrL.length && rightIndex < arrR.length) {
        if (arrL[leftIndex] < arrR[rightIndex]) {
            result.push(arrL[leftIndex++]);
        } else {
            result.push(arrR[rightIndex++]);
        }
    }
    var leftRemain = arrL.slice(leftIndex);
    var rightRemain = arrR.slice(rightIndex);
    return result.concat(leftRemain).concat(rightRemain);
}
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    var mid = Math.floor((arr.length / 2));
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
    // console.log(leftArr,rightArr)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}
console.log(mergeSort([12,223,34,45,56,67,87,9,8,76]))
// console.log(merge([1,2,3,4],[5,6,8,9]));

//=============================================================================================================//
//Count Sorting..

function countSort(arr) {
    let hash = {}, countArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!hash[arr[i]]) {
            hash[arr[i]] = 1;
        } else {
            hash[arr[i]] += 1;
        }
    }
    for (var key in hash) {
        // console.log(key)
        // countArr.push(parseInt(key));  // return sorted distinct elements
        for (let i = 0; i < hash[key]; i++) {
            countArr.push(parseInt(key)) //return sorted repeating elements.
        }
    }
    return countArr;
}
// console.log(countSort([12,987,127,8,9,9,223,34,45,56,67,87,9,8,76]))



// https://www.youtube.com/watch?v=tWCaFVJMUi8 
