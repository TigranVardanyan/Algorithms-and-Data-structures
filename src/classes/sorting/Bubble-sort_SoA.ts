//Bubble sort class

import SoA from "./SoA";

class BubbleSort_SoA implements SoA {
    public sort = (array: number[]) => {
        for (let i = 0; i < array.length; i++) {

            for (let j = 0; j < array.length - 1; j++) {

                if (array[j] > array[j + 1]) {
                    let swap = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = swap;
                }
            }
        }
        return array;
    }
}

export default BubbleSort_SoA;