

function multiplication(n) {
  if(n===0) return    1
    return n*multiplication(n-1)
}


console.log(multiplication(10));
console.log(multiplication(5));
console.log(multiplication(6));
