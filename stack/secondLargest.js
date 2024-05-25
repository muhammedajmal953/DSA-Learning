




let secondLargest = 0

let larggest=0

let stack = [23, 45, 67, 89]


while (stack.length) {
    let cur=stack.pop()
    if(cur>larggest){

        secondLargest=larggest
        larggest = cur
    } else if (cur > secondLargest) {
        secondLargest=cur
    }
}


console.log(secondLargest);

