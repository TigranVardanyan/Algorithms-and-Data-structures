function hash(key, arrayLen) {
    let total = 0;
    for(let char of key) {
        let value = char.charCodeAt(0) - 96 // a's code
        total = (total + value) % arrayLen
    }
    return total
}
function hash_2(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96 // a's code
        total = (total * WEIRD_PRIME + value) % arrayLen
    }
    return total
}
//Prime 117
export default hash
export default hash_2