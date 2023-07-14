// Insertion Sorting Algorithm..
// stable sorting..
// in place Algo..

// A Sorting algo is called in-place if the algo does not use extra space for manipulating the input but may require a small though non-constant extra space for its operation..

// Insertion Sort, the array is virtually split into a sorted and an unsorted part. values from the unsorted part are picked and placed at correct position in the sorted part..


function insertionSort(arr) {
    let n = arr.length;
    let val, i, j;
    for (i = 0; i < n; i++) {
        val = arr[i];
        for (j = i - 1; j > -1 && arr[j] > val; j--) { //j>-1 && value at j index should be greater than "val" for loop to start;
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = val;
    }
    return arr;
}

console.log(insertionSort([5, 4, 3, 2, 1]));

