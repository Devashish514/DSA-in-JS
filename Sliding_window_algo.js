// Window Sliding Technique is a computational technique which aims to reduce the use of nested loop and replace it with a single loop, thereby reducing the time complexity.

//  Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array.
// Naive Approach...

function maxSum(arr, n, k) {
    let maxSum = Number.MIN_VALUE;
    for (let i = 0; i < n - k + 1; i++) {
        let curSum = 0;
        for (let j = 0; j < k; j++) {
            curSum = curSum + arr[i + j];
            maxSum = Math.max(curSum, maxSum);
        }
    }
    return maxSum;
}

let arr1 = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let k1 = 3;
let n1 = arr1.length;
console.log(maxSum(arr1, n1, k1))

// //Sliding window technique
function slidingSum(arr, n, k) {
    let windowSum = 0;
    let currentSum = 0;
    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
        windowSum = currentSum;
    }
    for (let i = k; i < n; i++) {
        currentSum += arr[i] - arr[i - k];
        if (currentSum > windowSum) {
            windowSum = currentSum;
        }
    }
    return windowSum;
}

let arr2 = [12, 13, 14, 15, 16, 17];
// let n2 = arr2.length;
// let k2 = 3
console.log(slidingSum(arr, n, k))

//=============================================================================================================//
// Q.1 Finding sum of digits of a number until sum becomes single digit
// approach 1.

function sumTillSingle(num) {
    let sum = 0;
    while (num > 0 || sum > 9) {
        if (num == 0) {
            return 0;
        }
        sum = sum + num % 10;
        // num=Math.floor(num/10)
    }
    return sum;
}
console.log(sumTillSingle(121))

//==================================================================================================================//
// Q.2 Given an array of integers of size ‘n’, Our aim is to calculate the minimum sum of ‘k’ consecutive elements in the array.

function minSum(arr, n, k) {
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    let currentSum = windowSum;
    for (let i = k; i < n; i++) {
        currentSum += arr[i] - arr[i - k];
        windowSum = Math.min(currentSum, windowSum);
    }
    return windowSum;
}
let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let k = 3;
let n = arr.length;
console.log(minSum(arr, n, k))

//=============================================================================================================//
// // Q.3 Given a string str, find the length of the longest substring without repeating characters. 
// For “ABDEFGABEF”, the longest substring are “BDEFGA” and “DEFGAB”, with length 6.
// For “BBBB” the longest substring is “B”, with length 1.
// For “GEEKSFORGEEKS”, with length 7.

function longestUniqueSubsttr(s) {
    let seen = new Map();
    let maximum_length = 0;
    let start = 0;
    for (let end = 0; end < s.length; end++) {
        if (seen.has(s[end])) {
            start = Math.max(start, seen.get(s[end]) + 1);
        }
        seen.set(s[end], end)
        maximum_length = Math.max(maximum_length, end - start + 1);
    }
    return { maximum_length, seen, start };
}
// Driver code
let s = "geekforgeek"
let length = longestUniqueSubsttr(s);
console.log(longestUniqueSubsttr(s))

//=============================================================================================================///
//Q.4 