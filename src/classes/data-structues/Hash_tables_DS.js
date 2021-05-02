class Hash_tables_DS {
    constructor(size = 4) {
        this.keyMap = new Array(size)

    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96 // a's code
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total;
    }
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
        return index;
    }
}


export default Hash_tables_DS
