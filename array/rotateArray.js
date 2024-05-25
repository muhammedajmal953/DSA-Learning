function rotate(arr) {
    let right = arr.length-1
    let left = 0
    let temp=0
    while (left<right) {
        temp = arr[left]
        arr[left] = arr[right]
        
        arr[right] = temp
        
        left++
        right--
    }

    return arr
}


let arr = [1, 2, 3, 5]



console.log(rotate(arr));