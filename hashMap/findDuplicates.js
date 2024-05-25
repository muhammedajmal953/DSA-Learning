
let hashMap=new Map()

let str = 'dghghjgjkghjk'

let duplicates=[]
for (let s of str) {
    if (hashMap.has(s)) {
        hashMap.set(s,hashMap.get(s)+1)
    } else {
        hashMap.set(s,1)
    }
}


for (let elem of hashMap) {
    if (elem[1] > 1) {
        duplicates.push(elem[0])
    }
}


console.log(duplicates);