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
}




console.log(JSON.parse(JSON.stringify('132')))

export default Hash_tables_DS
