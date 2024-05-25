

function bubble3(array) {

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[j].length < array[i].length) {
                [array[j],array[i]]=[array[i],array[j]]
            }
        
       }

    }
 return array
}

console.log(bubble3(["Apple", "Banana", "Orange",'guva']));