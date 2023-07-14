// bubble Sort Algo..
// Sometimes referred to as Sinking sort..

// swapping array elements helper function
function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= i; j++) {    // j will only increment++ if it's less than or equals i, Otherwise i++;
            if (arr[i] < arr[j]) {
                swap(arr, i, j);
            }
        }
    }
    return arr;
}

console.log(bubbleSort([12, 434, 90, 7, 60, 9, 87, 66, 2]));