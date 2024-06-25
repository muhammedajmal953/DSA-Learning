

class Node{
    constructor() {
        this.children = {}
        this.isEnd = false
    }
}



class Trie{
    constructor() {
        this.root=new Node()
    }

    insert(Word) {
        let curr = this.root
        
        for (let char of Word) {
            if (!curr.children[char]) {
                curr.children[char]=new Node()
            }
            curr=curr.children[char]
        }
        curr.isEnd = true
    }

    search(word) {
        let node = this.searchNode(word)
        
        return node!=null && node.isEnd
    }

    searchNode(word) {
        let curr = this.root
        
        for (let char of word) {
            if (!curr.children[char]) {
                return null
            }
            curr=curr.children[char]
        }
        return curr
    }

    delete(word) {
        this.deleteNode(this.root,word,0)
    }

    deleteNode(root, word, index) {
        if (index === word.length) {
            if (!root.isEnd) return false
            
            root.isEnd = false
            return Object.keys(root.children).length===0
        }

        let char = word[index]
        
        if (!root.children[char]) return false
        
        let deleted = this.deleteNode(root.children[char], word, index + 1)
        
        if (deleted) {
            delete root.children[char]

            return Object.keys(root.children).length===0 && ! root.isEnd
        }
    }
}


let trie = new Trie()

trie.insert("hello")
trie.insert("hi")
trie.insert("hello")
trie.insert("hell")

trie.delete("hello")

console.log(trie.search("hello"));
console.log(trie.search("hi"));