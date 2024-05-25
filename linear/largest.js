


let largest = (nums) => {
    let large=0
    
    for (let num of nums) {
        if(num>large) large=num
    }
    return large
}

let num = [34, 54, 67, 89, 34]

console.log(largest(num));