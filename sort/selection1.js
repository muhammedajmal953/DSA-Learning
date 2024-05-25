
let selection1 = (arr) => {
    
    for (let i = 0; i < arr.length-1; i++){
        let min = i
        for (j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[min]) {
                min=j
            }
        }
        if (min != i) {
            [arr[i],arr[min]]=[arr[min],arr[i]]
        }
    }
    return arr
}

console.log(selection1([
    45,  3,  1,90, 78, 56, 50
   
  ]));