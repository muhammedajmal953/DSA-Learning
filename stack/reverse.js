

//reverse the string in stack


let string = 'hello'


let stack = []


for (let i = 0; i < string.length; i++){
    stack.push(string[i])
}

console.log(stack.length);

let res=''

while (stack.length) {
    res+=stack.pop()
}

console.log(res);