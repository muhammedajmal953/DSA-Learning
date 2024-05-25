

function reverse(str) {
    let m=''
    for (i = str.length-1; i>=0;i--) {
        m+=str[i]
    }

    return m
}


console.log(reverse('Hello'));
console.log(reverse('Ren'));
console.log(reverse('Sen'));


