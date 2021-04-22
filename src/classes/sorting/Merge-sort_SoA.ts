//Merge ort class

import SoA from "./SoA";

class MergeSort_SoA implements SoA {
    private merge(array1: number[], array2: number[]){
        let results = [];
        let i = 0;
        let j = 0;
        while(i < array1.length && j < array2.length){
            if(array2[j] > array1[i]){
                results.push(array1[i]);
                i++;
            } else {
                results.push(array2[j])
                j++;
            }
        }
        while(i < array1.length) {
            results.push(array1[i])
            i++;
        }
        while(j < array2.length) {
            results.push(array2[j])
            j++;
        }
        return results;
    }
    public sort(array: number[]): number[] {
        if(array.length <= 1) return array;
        let mid = Math.floor(array.length/2);
        let left = this.sort(array.slice(0,mid));
        let right = this.sort(array.slice(mid));
        return this.merge(left, right);
    }
}

export default MergeSort_SoA;