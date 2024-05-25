

function mergeSort(strings) {
    if (strings.length < 2) return strings

    let mid=Math.floor(strings.length/2)
    
    let leftArray = strings.slice(0, mid)
    let rightArray = strings.slice(mid)
    
    return merge(mergeSort(leftArray),mergeSort(rightArray))
}

function merge(left, right) {
    let subArray = []
    
    while (left.length && right.length) {
        if (left[0].length > right[0].length) {
            subArray.push(left.shift())
        } else {
            subArray.push(right.shift())
        }
    }
    return [...subArray,...left,...right]
}


console.log(mergeSort(['sdfsf','sfgdfgd','eybvbdfgdf']));