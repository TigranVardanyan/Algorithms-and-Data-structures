class Binary_search_tree_DS {
    constructor() {
        this.root = null
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

tree.root = new Node(10);

tree.root.right = new Node(15)

tree.root.left = new Node(5)

tree.root.left.right = new Node(9);

console.log(tree)

export default Binary_search_tree_DS