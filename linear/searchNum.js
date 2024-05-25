

function position(nums,target) {
    let sum=0
    for (let num of nums) {
        if (num === target) {
           return nums.indexOf(num)
       }
    }
   return -1
}

let arr = [45, 6, 7, 99, 78, 65]

let target = 99


console.log('The Index of the target: ',position(arr,target));