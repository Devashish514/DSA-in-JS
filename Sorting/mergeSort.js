// Merge Sort Algorithm
// O(nlogn)

function merge(arrL, arrR) {
    let result = [];
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
    var mid = Math.floor(arr.length / 2);
    var leftArr = arr.slice(0, mid);
    var rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

console.log(mergeSort([12,223,34,45,56,67,87,9,8,76]));
