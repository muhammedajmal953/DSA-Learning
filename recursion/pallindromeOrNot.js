

function pallindrome(n) {
    if(n<0) return false
    n = n + ''
   
    if(n[0]!==n[n.length-1]) return false
  
    function rev(str,len) {
        if (len < 0) return ''
        
        return str[len]+rev(str,len-1)
    }
    
    return n===  rev(n,n.length-1)
}


console.log(pallindrome(121));
console.log(pallindrome(-121));