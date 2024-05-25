

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    
    let leftArray = arr.slice(0, mid)
    let rightArray = arr.slice(mid)

    return merge(mergeSort(leftArray),mergeSort(rightArray))
}


function merge(left, right) {
    let subArray = []
    
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            subArray.push(left.shift())
        } else {
            subArray.push(right.shift())
        }
    }
    return [...subArray,...left,...right]
}


console.log( mergeSort([454,66,89,44,0]));