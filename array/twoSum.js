 

function twoSum(arr,target) {
    let obj = {}
    
    for (i = 0; i < arr.length; i++){
        if (obj[target - arr[i]] === 1) {
            return [arr[i],target - arr[i]]
        } else {
            obj[arr[i]]=1
        }
    }
    return []
}

let arr = [6, 5, 3, 2, 4, 9]
let target = 10

console.log(twoSum(arr,target));