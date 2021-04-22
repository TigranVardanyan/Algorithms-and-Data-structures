//Quick sort class

class QuickSort_SoA {
    private partition(array: Array<number>, left: number = 0, right: number = array.length - 1) {
        const pivot = array[Math.floor((right + left) / 2)];
        let i = left;
        let j = right;

        while (i <= j) {
            while (array[i] < pivot) {
                i++;
            }

            while (array[j] > pivot) {
                j--;
            }

            if (i <= j) {
                [array[i], array[j]] = [array[j], array[i]];
                i++;
                j--;
            }
        }

        return i;
    }

    public sort(array: Array<number>, left: number = 0, right: number = array.length - 1) {
        let index;
        if (array.length > 1) {
            index = this.partition(array, left, right);

            if (left < index - 1) {
                this.sort(array, left, index - 1);
            }

            if (index < right) {
                this.sort(array, index, right);
            }
        }
        return array;
    }
}

export default QuickSort_SoA;
