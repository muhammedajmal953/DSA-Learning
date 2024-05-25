

function selection2(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let start=i
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] > arr[start]) {
                start=j
            }
        }
        if (start !== i) {
            [arr[i],arr[start]]=[arr[start],arr[i]] 
      }
    }
    return arr
}

console.log(selection2([ 45, 3, 1,90, 78, 56, 50]));