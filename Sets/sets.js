var set = new Set();

// Insertion...
set.add(1);
set.add(2);
set.add(3);
set.add(1);   // Does not add duplicate value in set..


// Deletion...

set.delete(2);

// checking set contains the value..
console.log(set.has(1));


// Intersection
// Intersection of two sets consist of the common elements between those two sets..

var set1 = new Set();
var set2 = new Set();

set1.add(1);
set1.add(2);
set1.add(3);

set2.add(1);
set2.add(4);
set2.add(3);

function Intersection(set1, set2) {
    var intersection = new Set();
    for (let ele of set2) {
        if (set1.has(ele)) {
            intersection.add(ele);
        }
    }
    return intersection;
}
console.log("Intersection==> ", Intersection(set1, set2));

// isSuperSet....
// A set is a superset of another set if it contains all the elements of the other set....

var set3 = new Set();
var set4 = new Set();

set3.add(1);
set3.add(2);
set3.add(4);

set4.add(1);
set4.add(2);
set4.add(3);
set4.add(4);

function isSuperSet(setA, subset) {
    for (var ele of subset) {
        if (!setA.has(ele)) {
            return false;
        }
    }
    return true;
}

console.log("SuperSet", isSuperSet(set4, set3));

//Union..
// union of two sets combines unique elements of both sets.

function union(setA, setB) {
    var union = new Set(setA);
    for (var ele of setB) {
        union.add(ele);
    }
    return union;
}

console.log("union", union(set3, set4));


// //difference....
// // difference of setA from SetB is all of the element in setA that are not in setB.
function differenceSet(setA, setB) {
    var difference = new Set(setA);
    for (var ele of setB) {
        difference.delete(ele);
    }
    return difference;
}

console.log("Difference", differenceSet(set1, set2));


//Q.1 Using set to check for duplicates in an array;

function checkDuplicate(arr) {
    var mySet = new Set(arr);
    return mySet.size < arr.length;
}
console.log(checkDuplicate([1, 2, 3, 4, 5, 6, 7]));
console.log(checkDuplicate([1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 99, 9, 9]));
//===========================================================================================================//

// Q.2 returning all uniwue values from seperate array.

function uniqueArr(arr1, arr2) {
    var newSet = new Set(arr1.concat(arr2));
    return Array.from(newSet);
}

console.log("unique Arr", uniqueArr([1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 99, 9, 9], [1, 2, 3, 4, 5, 6, 7]));