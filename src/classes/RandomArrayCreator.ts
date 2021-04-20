//Random array creator class

class ArrayCreator {
    public static generateRandomArray(capacity: number, minNumber: number, maxNumber: number) {
        let array: number[] = [];
        for (let i = 0; i < capacity; i++) {
            array.push(Math.floor((Math.random() * maxNumber) + minNumber));
        }
        return array
    }
}

export default ArrayCreator