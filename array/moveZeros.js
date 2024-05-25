

function moveZeros(arr) {
    let j = arr.length-1
    let i = 0
    
    while (i != j) {
        if (arr[i] === 0) {
            if (arr[j] !== 0) {
                let temp = arr[i]
                
                arr[i] = arr[j]
                
                arr[j] = temp
                
            }
            j--
        } else {
            i++
        }
    }

    return arr
}


let arr = [4, 0, 6, 2, 0, 8]


console.log(moveZeros(arr));
