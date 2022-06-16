// // Swap numbers without using 3rd variable..

// let a = 10;
// let b = 5;

// a = a + b;  // a=15
// b = a - b; // b=15-5 == 10 == a
// a = a - b; // a= 15-10 == b
// console.log(a, b)

// // Swap strings......
// let str1 = "Something";
// let str2 = "Good";

// str1 = str1 + str2; // SomethingGood
// str2 = str1 - str2;
// console.log(str1)

// // reverse array without using another array...
// function reverseArr(arr) {
//     let i = 0;
//     let j = arr.length - 1;
//     while (i < j) {
//         arr[i] = arr[i] + arr[j];
//         arr[j] = arr[i] - arr[j];
//         arr[i] = arr[i] - arr[j];
//         i++;
//         j--;
//     }
//     return arr;
// }
// console.log(reverseArr([12, 34, 5, 67, 8, 890]));  // [ 80, 67, 5, 34, 12 ]

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= i; j++) {
            if(arr[i]<arr[j]){
                swap(arr,i,j);
            }
        }
    }
    return arr;
}

console.log(bubbleSort([12,434,90,7,60,9,87,66,2]))
