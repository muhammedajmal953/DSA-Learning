


class hashTable{
    constructor(size) {
        this.table = new Array(size)
        this.size=size
    }

    hash(key) {
        let total=0
        for (let i = 0; i < key.length; i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }


    set(key,value) {
        const index = this.hash(key)
        
        let bucket = this.table[index]
        
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            let sameKey = bucket.find(item => item[0] === key)
            
            if (sameKey) {
               bucket[1]=value
            } else {
                bucket.push([key,value])
            }
        }
    }
    get(key) {
        const index = this.hash(key)
        
        let bucket = this.table[index]

        let sameKey = bucket.find(item => item[0] === key)

        if (sameKey) {
            return sameKey
        }
       return undefined
    }


    remove(key) {
        const index = this.hash(key)
        
        let bucket = this.table[index]

        let sameKey = bucket.findIndex(item => item[0] === key)
        

        if (sameKey) {
            bucket.slice(sameKey,1)
        }

    }


    display() {
        for (let i = 0; i < this.table.length; i++){
            if (this.table[i]) {
                console.log(this.table[i]);
            }
        }
    }
}


let table = new hashTable(8)


table.set('name', 'asjad')
table.set('mane', 'asja')
table.set('city', 'mahe')

console.log(table.get('city'))




table.display()