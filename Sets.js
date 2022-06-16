// var element=new Set();

// //insertion
// element.add(1)
// element.add(2) 
// element.add(3)
// element.add(4)
// element.add(5)
// element.add(6)
// console.log(element)

// // deletion..
// element.delete(6)
// console.log(element)

// // contains...
// console.log(element.has(5))
// console.log(element.has(4))
// console.log(element.has(6))

// // intersection...

function intersectSet(setA,setB){
    var intersection = new Set();
    for(var ele of setB){
        if(setA.has(ele)){
            intersection.add(ele);
        }
    }
    return intersection;
}

// let setA=new Set([1,2,3,4,5]);
// let setB=new Set([2,3,6]);
// console.log(intersectSet(setA,setB));

// //isSuerSet...

// function isSuperSet(setA,subSet){
//     for(var ele of subSet){
//         if(!setA.has(ele)){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isSuperSet(setA,setB));

// // union..

// function unionSet(setA,setB){
//     var unionv= new Set(setA);
//     for(var ele of setB){
//         unionv.add(ele);
//     }
//     return unionv;
// }

// console.log(unionSet(setA,setB))


// //difference....
// // difference of setA from SetB is all of the element in setA that are not in setB.
// function differenceSet(setA,setB){
//     var difference=new Set(setA);
//     for(var ele of setB){
//         difference.delete(ele);
//     }
//     return difference;
// }

// console.log(differenceSet(setA,setB))
//=============================================================================================================//

//Q.1 Using set to check for duplicates in an array;

// function checkDuplicate(arr){
//     var mySet = new Set(arr);
//     return mySet.size< arr.length;
// }
// console.log(checkDuplicate([1,2,3,4,5,6,7]))
// console.log(checkDuplicate([1,2,3,4,5,6,6,7,7,8,99,9,9]))
//===========================================================================================================//

// Q.2 returning all uniwue values from seperate array.

// function uniqueArr(arr1,arr2){
//     var newSet = new Set(arr1.concat(arr2));
//     return Array.from(newSet);
// }

// console.log(uniqueArr([1,2,3,4,5,6,6,7,7,8,99,9,9],[1,2,3,4,5,6,7]))