let arr = [0, 0, 3, 3, 4, 5, 6]


function countDistinct(arr) {
    let i = 0
    
    for (j = 0; j < arr.length; j++){
        if (arr[i] != arr[j]) {
            i++
            arr[i] = arr[j]
           
        }
    }

    return i+1
}

console.log(countDistinct(arr));