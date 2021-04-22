//Selection sort class

import SoA from "./SoA";

class SelectionSort_SoA implements SoA {
    private swap = (array: number[], idx1: number, idx2: number) => {
        ([array[idx1], array[idx2]] = [array[idx2], array[idx1]]);
    }

    public sort(array: number[]): number[] {
        for (let i = 0; i < array.length; i++) {
            let lowest = i;
            for (let j = i + 1; j < array.length; j++) {
                if (array[lowest] > array[j]) {
                    lowest = j;
                }
            }
            if (i !== lowest) this.swap(array, i, lowest);
        }
        return array;
    }
}

export default SelectionSort_SoA;