
class HashTable{
    constructor(size) {
        this.table = new Array(size)
        this.size=0
    }


    hash(key) {
        let total=0
        for (let i = 0; i < key.length; i++){
            total+=key.charCodeAt(i)
        }
        return total%this.table.length
    }

    set(key, value) {
        const index = this.hash(key)
        
        this.table[index] = [key, value]
        this.size++
    }
    get(key) {
        const index = this.hash(key)
        
        return this.table[index]
    }

    remove(key) {
        const index = this.hash(key)
        

        this.table[index] = undefined
        
        this.size--
    }


    display() {
        for (let i = 0; i < this.table.length; i++){
            if (this.table[i]) {
                console.log(i,this.table[i])
            }
        }
    }

}



let hashTable = new HashTable(50)


hashTable.set('name', 'asjad')
hashTable.set('plac', 'mahe')

console.log(hashTable.get('name'))




hashTable.display()