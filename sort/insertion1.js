

function insertionSort1(arr) {
    for (i = 1; i < arr.length; i++){
        let key = arr[i]
        let j = i - 1
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }
            arr[j+1]=key
       
    }
    return arr
}


console.log(insertionSort1([ 56, 34, 23, 18, 7, 5 ]))

