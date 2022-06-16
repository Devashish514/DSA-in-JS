//Two pointers is really an easy and effective technique that is typically used for searching pairs in a sorted array.

// to find pair with given sum

// first approach

function findPair(arr, n, sum) {
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            if (i == j) {
                continue
            }
            if (arr[i] + arr[j] == sum) {
                return 1;
            }
            if (arr[i] + arr[j] > sum) {
                break;
            }
        }
    }
    return 0;
}
let arr = [14, 5, 6, 7, 85, 4];
console.log(findPair(arr.sort((a, b) => a - b), arr.length, 11))
console.log(arr)

// two pointer Approach...
// Only be used in Sorted Array...
// [1,2,3,4,5];
function isPairSum(arr, n, sum) {
    let i = 0;
    let j = n - 1;
    while (i < j) {
        if (arr[i] + arr[j] == sum) {
            return true;
        }
        else if (arr[i] + arr[j] < sum) {
            i++
        }
        else {
            j--
        }
    }
    return false;
}
let arr2 = [14, 5, 6, 7, 85, 4];
console.log(isPairSum(arr2.sort((a, b) => a - b), arr2.length, 99))
console.log(arr2)

// ==================================================================================================================//

// Questions on Two Pointer....

// Q1. Find the pair closest to the given Sum....from two sorted Arrays
//for arrays of any size... 

// console.log(1-3)
// console.log(Math.abs(1-3))  // basically Math.abs() is modulus |x|, cannot be -ve

// Approach 1.....
function closestPair(arr1, arr2, m, n, target) {
    let diff = Number.MAX_VALUE // maximum floating point number
    let leftIndex;
    let rightIndex;

    let l = 0; let r = n - 1;
    while (l < m && r >= 0) {
        if (Math.abs(arr1[l] + arr2[r] - target) < diff) {
            leftIndex = l;
            rightIndex = r;
            diff = Math.abs(arr1[l] + arr2[r] - target);
        }
        if (arr1[l] + arr2[r] > target) {
            r--
        } else {
            l++
        }
    }
    console.log(`Index of Closest pair ${leftIndex},${rightIndex}`)
    console.log(`Closest pair values ${arr1[leftIndex]},${arr2[rightIndex]}`)
}
let a1 = [16, 25, 40, 75, 90];
let b1 = [2, 3, 7, 9, 14, 17, 19]
closestPair(a1, b1, a1.length, b1.length, 99)


//===================================================================================================================//

//Q.2 Given two arrays of integers, compute the pair of values (one value in each array) with the smallest (non-negative) difference. Return the difference.

// Consider the following two arrays: 
// A: {l, 2, 11, 15} 
// B: {4, 12, 19, 23, 127, 235} 
// 1. Suppose a pointer a points to the beginning of A and a pointer b points to the beginning of B. The current difference between a and bis 3. Store this as the min. 
// 2. How can we (potentially) make this difference smaller? Well, the value at b is bigger than the value at a, so moving b will only make the difference larger. Therefore, we want to move a. 
// 3. Now a points to 2 and b (still) points to 4. This difference is 2, so we should update min. Move a, since it is smaller. 
// 4. Now a points to 11 and b points to 4. Move b. 
// 5. Now a points to 11 and b points to 12. Update min to 1. Move b. And so on. 

function findSmallestDifference(arr1, arr2, m, n) {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    let i = 0, j = 0;
    let diff = Number.MAX_SAFE_INTEGER;
    while (i < m && j < n) {
        if (Math.abs(arr1[i] - arr2[j]) < diff) {
            diff = Math.abs(arr1[i] - arr2[j]);
        }
        if (arr1[i] < arr2[j]) {
            i++
        } else {
            j++
        }
    }
    return diff;
}
// // Driver Code
let A = [1, 2, 11, 5];
let B = [4, 12, 19, 23, 127, 235];
let m = A.length;
let n = B.length;
console.log(findSmallestDifference(A, B, m, n))

//=============================================================================================================//
// Find pairs having largest differnce 

function largestDiff(A, B, m, n) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    let i = 0, j = 0;
    let diff = Number.MIN_SAFE_INTEGER;
    while (i < m && j < n) {
        if (Math.abs(A[i] - B[j]) > diff) {
            diff = Math.abs(A[i] - B[j]);
        }
        if (A[i] < B[j]) {
            j++
        } else {
            i++
        }
    }
    return diff;
}
let arr111 = [1, 2, 11, 5];
let arr22 = [4, 12, 19, 23, 127, 235];
let m1 = arr111.length;
let n1 = arr22.length;
console.log(largestDiff(arr111, arr22, m1, n1))

//================================================================================================================//

//Q3. Given a sorted array and a number x, find a pair in an array whose sum is closest to x.

function findPair(arr, n, x) {
    let i = 0;
    let j = n - 1;
    let leftIndex, rightIndex;
    let diff = Number.MAX_VALUE;
    while (i < n) {
        if (Math.abs(arr[i] + arr[j] - x) < diff) {
            leftIndex = i;
            rightIndex = j;
            diff = Math.abs(arr[i] + arr[j] - x);
        }
        if (arr[i] + arr[j] > x) {
            j--
        } else {
            i++
        }
    }
    return [leftIndex, rightIndex]
}
console.log(findPair([1, 20, 25, 45, 67, 89], 5, 46))

//================================================================================================================//

//Q.4 Given an array of distinct elements. The task is to find triplets in the array whose sum is zero.
function triplets(arr, n) {
    arr.sort((a, b) => a - b);
    let found = false;
    for (let i = 0; i < n; i++) {
        let leftIndex = i + 1;
        let rightIndex = n - 1;
        let x = arr[i];
        while (leftIndex < rightIndex) {
            if (x + arr[leftIndex] + arr[rightIndex] == 0) {
                console.log(x, arr[leftIndex], arr[rightIndex]);
                rightIndex--
                leftIndex++
                found = true;
            } else if (x + arr[leftIndex] + arr[rightIndex] < 0) {
                leftIndex++
            } else {
                rightIndex--
            }
        }
    }
    if (found == false) {
        console.log("no triplets")
    }
}
triplets([0, -1, 2, -3, 1], 5)

//==================================================================================================================//

//Q.5  Given an array of distinct elements. The task is to find triplets in the array whose sum is equal to N.

function findTriplets(arr, len, n) {
    arr.sort((a, b) => a - b);
    let found = false;
    for (let i = 0; i < len - 1; i++) {
        let x = arr[i];
        let leftIndex = i + 1
        let rightIndex = len - 1;
        let diff = Number.MAX_VALUE;
        while (rightIndex > leftIndex) {
            if (x + arr[leftIndex] + arr[rightIndex] == n) {
                console.log(x, arr[leftIndex], arr[rightIndex]);
                rightIndex--;
                leftIndex++;
                found = true;
            }
            else if (x + arr[leftIndex] + arr[rightIndex] < n) {
                leftIndex++
            } else {
                rightIndex--
            }
        }
    }
    if (found == false) {

        return console.log("No triplets")
    }
}
findTriplets([2, 5, 3, 5, 8], 5, 13);

//================================================================================================================//

// Q.6  Given an array of distinct elements. The task is to find fourlets in the array whose sum is equal to N.

function findPairOf4(arr, n, num) {
    arr.sort((a, b) => a - b)
    let found = false;
    if (n < 4) {
        return console.log("Invalid Input");
    }
    for (let i = 0; i < n - 1; i++) {
        let x = arr[i];
        let y = arr[i + 1]
        let leftIndex = i + 2;
        let rightIndex = n - 1;
        while (rightIndex > leftIndex) {
            if (x + y + arr[leftIndex] + arr[rightIndex] == num) {
                console.log(x, y, arr[leftIndex], arr[rightIndex]);
                rightIndex--
                leftIndex++
                found = true;
            }
            else if (x + y + arr[leftIndex] + arr[rightIndex] < num) {
                leftIndex++
            } else {
                rightIndex--
            }
        }
    }
    if (found == false) {
        return console.log("No fourlets..!!")
    }
}
let arr11 = [2, 4, 6, 8, 12, 14, 16]
let len = arr11.length
findPairOf4(arr11, len, 40)

//==========================================================================================================//

//Q.7Given an array of integers, you have to find three numbers such that the sum of two elements equals the third element.

function findNums(arr, n) {
    arr.sort((a, b) => a - b);
    for (let i = n - 1; i >= 0; i--) {
        let j = 0;
        let k = i - 1;
        while (j < k) {
            if (arr[i] == arr[j] + arr[k]) {
                console.log(arr[i], arr[j], arr[k]);
                return;
            }
            if (arr[i] > arr[j] + arr[k]) {
                j++;
            } else {
                k--;
            }
        }
    }
    return console.log("no such pair");
}
let arr12 = [5, 32, 1, 7, 12, 50, 19, 21, 2];
let len12 = arr.length;
findNums(arr12, len12)