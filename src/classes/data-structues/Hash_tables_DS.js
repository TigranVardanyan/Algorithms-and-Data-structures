class Hash_tables_DS {
    constructor() {
        this.values = []
    }
    hash(key, arrayLen) {
        let total = 0;
        for(let char of key) {
            let value = char.charCodeAt(0) - 96 // a's code
            total = (total + value) % arrayLen
        }
        return total
    }
    hash_2(key, arrayLen) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96 // a's code
            total = (total * WEIRD_PRIME + value) % arrayLen
        }
        return total
    }
}


let table = new Hash_tables_DS()

console.log('cyan', table.hash_2('cyan', 117));
console.log('cyan', table.hash_2('cyan', 117));
console.log('cyan', table.hash_2('cyan', 117));
console.log('cyan', table.hash_2('cyan', 117));
console.log('red', table.hash_2('red', 117));
console.log('red', table.hash_2('red', 117));
console.log('green', table.hash_2('green', 117));
console.log('orange', table.hash_2('orange', 117));
console.log('pink', table.hash_2('pink', 117));

// 117

export default Hash_tables_DS
