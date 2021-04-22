//Insertion sort class
import SoA from "./SoA";

class InsertionSort_SoA implements SoA {
    sort(array: number[]) : number[] {
        let currentVal: number = 0;
        for(let i = 1; i < array.length; i++){
            currentVal = array[i];
            let j;
            for(j = i - 1; j >= 0 && array[j] > currentVal; j--) {
                array[j+1] = array[j]
            }
            array[j + 1] = currentVal;
        }
        return array;
    }
}

export default InsertionSort_SoA;

