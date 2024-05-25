

function prime(n,con=2) {
    
    if (n <= 1) return false
    
    if (n === con) return true
    if (n%con===0) return false
    
    return prime(n,con+1)
}


console.log(prime(6));
console.log(prime(5));