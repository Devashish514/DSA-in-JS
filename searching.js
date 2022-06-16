// linear search
// function linearSearch(arr, n) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == n) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(linearSearch([12, 45, 78, 98, 564], 989));

// f(n)=O(n)

//===================================================================================================//
//Binary search
// Binary search can only be applicable on sorted array.
// Unlike linar search , binary search check the middle value to see whether the desired value is smaller or greater.

function binarySearch2(arr, n) {
    var i = 0;
    var j = arr.length - 1;
    while (i < j) {
        var mid = Math.floor((j + i) / 2);
        if (arr[mid] == n) {
            return mid;
        }else if (n > arr[mid]) {
            i = mid+1;
        } else {
            j = mid-1;
        }
    }
    return -1;
}
let arr = [1, 3, 4, 5, 6, 7, 8, 9]
console.log(binarySearch2(arr, 11));

