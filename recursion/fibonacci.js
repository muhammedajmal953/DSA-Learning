function fiboancci(n) {
    
    if (n <= 1) return n
    
    return fiboancci(n-1)+fiboancci(n-2)

}

console.log(fiboancci(5));
console.log(fiboancci(6));
console.log(fiboancci(7));



