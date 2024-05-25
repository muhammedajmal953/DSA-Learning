

// replace odd numbers with 0 from a 0-indexed array


let replaceOdd = (nums) => {
    for (i = 0; i < nums.length; i++){
        if(nums[i]%2!==0) nums[i]=0
    }

    return nums
}


let arr = [23, 45, 6, 7, 34, 3]

console.log(replaceOdd(arr));

