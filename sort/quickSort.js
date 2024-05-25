

function quickSort(arr) {
    if (arr.length <= 1) return arr
    
    let pivot = arr[0]
    let left = []
    let right = []
    
    for (i = 1; i < arr.length; i++){
        if (arr[i].length < pivot.length) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}


console.log(quickSort(['rgfgrtererr','dfdgdfg','ddfhdfhgd','dsfte']));