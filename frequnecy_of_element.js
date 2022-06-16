// const frequency=(arr)=>{
//     const countArr=[]
//     let count=1;
//     for(let i=0;i<arr.length;i++){
//         for(var j =i+1;j<arr.length;j++){
//             if(arr[i]===arr[j]){
//                 count++
//                 countArr.push(arr[i],count);
//                 count=1;
//                 continue
//             }
//             continue
//         }
//     }
//     return countArr;
// }
// console.log(frequency([2,3,4,2,3,4,4]));

// //simple Method...
// const occurrences = [2,3,4,2,3,4,4].reduce(function (prev, curr) {
//     return prev[curr] ? ++prev[curr] : prev[curr] = 1, prev
//   }, {});
  
// console.log(occurrences)

function frequency(arr){
    let obj={};
    arr.forEach(element => {
        if(!obj[element]){
            obj[element]=1;
        }else{
            obj[element]++;
        }
    });
    return obj;
}
console.log(frequency([2,3,4,2,3,4,4]));