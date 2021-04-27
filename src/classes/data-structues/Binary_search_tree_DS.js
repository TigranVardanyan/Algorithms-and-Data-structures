class Binary_search_tree_DS {
    constructor() {
        this.root = null
    }
    insert(value) {
        let newNode = new Node(value);
        if ( this.root === null ) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while ( true ) {
                if( value === current.value ) return undefined;
                if ( value < current.value ) {
                    if ( current.left === null ) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else if ( value > current.value ) {
                    if ( current.right === null ) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }
    find(value) {
        if ( this.root === null ) return false
        let current = this.root;
        let found = false;
        while ( current && !found ) {
            if ( value < current.value ) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                found = true
            }
        }
        if ( !found ) return undefined
        return current
    }
    contains(value) {
        if ( this.root === null ) return false
        let current = this.root;
        let found = false;
        while ( current && !found ) {
            if ( value < current.value ) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                return true
            }
        }
        return false
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let tree = new Binary_search_tree_DS()

tree.insert(15)
tree.insert(10)
tree.insert(5)
tree.insert(20)
tree.insert(100)
tree.insert(-15)
tree.insert(0)
tree.insert(60)
tree.insert(21)
tree.insert(7)
tree.insert(8)
tree.insert(9)
tree.insert(56)
tree.insert(11)
tree.insert(19)
tree.insert(19)

console.log(tree.find(11))
console.log(tree.find(20))
console.log(tree.find(30))
console.log(tree.find(8))
console.log(tree.contains(8))



export default Binary_search_tree_DS