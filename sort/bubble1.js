

function bubbleSort1(arr) {
    
    for (let i = 0; i < arr.length-1; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] > arr[j]) {
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }
    return arr
}


console.log(bubbleSort1([23,5,7,18,56,34]));