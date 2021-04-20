//Bubble sort class

class BubbleSort_SoA {
    public sort = (array: number[]) => {
        let a = Date.now();
        for(let i = 0; i < array.length; i++) {

            for(let j = 0; j < array.length - 1; j++) {

                if(array[j] > array[j + 1]) {
                    let swap = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = swap;
                }
            }
        }
        console.log(Date.now() - a);
        console.log('ready')
        return array;
    }
}

export default BubbleSort_SoA;