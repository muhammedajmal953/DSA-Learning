


 const unsortedObject = {
  d: 4,
  b: 2,
  a: 1,
  c: 3
};

let entries = Object.entries(unsortedObject)

for (i = 0; i < entries.length-1; i++){
    for (let j = i+1; j < entries.length; j++) {
       
        if (entries[j][1] < entries[i][1]) {
            [entries[i],entries[j]]= [entries[j],entries[i]]
        }
        
    }
}

let sorted={}
for (let i = 0; i < entries.length; i++) {
    
   sorted[entries[i][0]]=entries[i][1]

    
}

console.log(sorted);
