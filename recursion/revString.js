
function pal(str) {
    let n=str.length
    function reverse(str, n) {
  
        if (n < 0) return ''
    
        return str[n] + reverse(str, n - 1)
    }

let rev = reverse(str, str.length - 1)

return str===rev

}


console.log(pal('hello'));
console.log(pal('mam'));



