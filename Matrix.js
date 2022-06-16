var arr = new Array(3).fill().map(() => new Array(3).fill()) //method to create a "m X n" Empty matrix... m is row and n is col.
console.log(arr)
// console.log(myFirstMatrix(arr,3));
// console.log(arr[0][0]);

// two dimensional array...

var M = [];
var rows = 5;
for (var i = 0; i < rows; i++) {
    M[i] = [];
}
// console.log(M)

// better way....

let matrix = function (nR, nC, initial) {
    var arr = [];
    for (var i = 0; i < nR; i++) {
        var cloumns = [];
        for (var j = 0; j < nC; j++) {
            cloumns[j] = initial;
        }
        arr[i] = cloumns;
    }
    return arr;
}
var nums = matrix(5, 5, 0);
// console.log(nums)         
nums[0][3] = "hey"                                   // change value of element[r][c]
// // console.log(nums)

// // if we want to create matrix upto n ;

for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums[0].length; j++) {
        nums[i][j] = j
    }
}
// // console.log(nums).

// Processing a 2-D array...

// 1) Column pattern .... accessing elements of a column;
// this pattern accesing elements of colums first ( horizontally adding elemnts in total) (89+78+65....)

function getAverage(gradesArr) {
    var total = 0;
    var average = 0.0;
    for (var row = 0; row < gradesArr.length; row++) {
        for (var col = 0; col < gradesArr[row].length; col++) {
            total += gradesArr[row][col];
        }
        average = total / grades[row].length;
        console.log(`Student ${row + 1} : ${average.toFixed(2)}`);
        total = 0;
        average = 0.0;
    }
}
let grades = [
    [89, 78, 65],
    [76, 98, 97],
    [56, 45, 100]
]
// getAverage(grades)

// //2) row pattern access..
// // this pattern accesing elements of rows first ( vertically adding elemnts in total) (89+76+56)

function getAverage2(grades) {
    var total = 0;
    var average = 0.0;
    for (var col = 0; col < grades.length; col++) {
        for (var row = 0; row < grades[col].length; row++) {
            total += grades[row][col];
        }
        average = total / grades[col].length;
        console.log(`Student ${col + 1} : ${average.toFixed(2)}`);
        total = 0;
        average = 0.0;
    }
}
// getAverage2(grades)




// // Spiral Matrix...
// let M = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20]
// ]

function spiralPrint(M) {
    var topRow = 0,
        leftCol = 0,
        btmRow = M.length - 1,
        rightCol = M[0].length - 1;
    while (topRow < btmRow && leftCol < rightCol) {
        for (var col = 0; col <= rightCol; col++) {
            console.log(M[topRow][col]);
        }
        topRow++;
        for (var row = topRow; row <= btmRow; row++) {
            console.log(M[row][rightCol]);
        }
        rightCol--;
        if (topRow <= btmRow) {
            for (var col = rightCol; col > 0; col--) {
                console.log(M[btmRow][col]);
            }
            btmRow--;
        }
        if (leftCol <= rightCol) {
            for (var row = btmRow; row > topRow; row--) {
                console.log(M[row][leftCol]);
            }
            leftCol++;
        }
    }
}
let M1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
spiralPrint(M1);

