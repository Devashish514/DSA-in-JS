// Algorithm To Find the largest Number in Array....

//Time Complexityf(n)===>  O(n)

const findNum= (arr)=>{
    let max= 0;
    for(var i in arr){
        if(arr[i]>0){
            max= arr[i];
        }else{
            continue
        }
    }
    return max
}

// console.log(findNum([2,54,789,987,0]));



