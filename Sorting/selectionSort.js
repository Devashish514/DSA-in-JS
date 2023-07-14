// Selection Sort Algorithm...
// Unstable

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}


function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let pos = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[pos]) {
                pos = j;
            }
        }
        swap(arr, i, pos)
    }
    return arr;
}

console.log(selectionSort([12, 1, 13, 4, 15, 11]));