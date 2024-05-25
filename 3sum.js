var threeSum = function (nums) {
    let arr = []
    nums.sort((a, b) => a - b)

    let hashMap = {}


    for (i = 0; i < nums.length - 2; i++) {
        let start = i + 1
        let end = nums.length - 1

        while (start < end) {

            let key = `${nums[i]} , ${nums[start]} , ${nums[end]}`
            if (nums[i] + nums[start] + nums[end] === 0 && !hashMap[key]) {
                let cur = [nums[i], nums[start], nums[end]]
                hashMap[key]=1
                arr.push(cur)


                start++
                end--
            } else if (nums[start] + nums[end] < 0 - nums[i]) {
                start++
            } else {
                end--
            }
        }
    }
    return arr

};