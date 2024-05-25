let arr = [4, 5, 6, 7, 8, 9, 7]

let max=arr[0]
function maxSum(arr) {
    for (let i = 0; i < arr.length - 1; i++){
        let curSum=0
        for (let j = i; j < arr.length; j++) {
           curSum+=arr[j]
            if(curSum>max)max=curSum
        }
    }
    return max
}




console.log(maxSum(arr));