

function selection3(arr) {
    for (let i = 0; i < arr.length - 1; i++){
        let minIndex=i
        for (let j = i+1; j < arr.length; j++){
            if (arr[j].length > arr[minIndex].length) {
                minIndex=j
            }
        }
        if (minIndex != i) {
            [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
        }
    }
    return arr
}

console.log(selection3(['ssss','tttttttt','sdfgsdfgdsfsfg']))