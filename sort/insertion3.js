

function insertion3(arr) {
    for (i = 0; i < arr.length; i++){
        let key = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j].length > key.length) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j+1]=key
    }
    return arr
}


console.log(insertion3(['dffgdg','ssfg','sfrrsgdf','aeefdfffff']));