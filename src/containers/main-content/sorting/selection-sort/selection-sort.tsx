import React, {FC} from 'react';
import SelectionSort_SoA from "../../../../classes/sorting/Selection-sort_SoA";
import RandomArray from "../../../../components/random-array/random-array";

const algorithm = new SelectionSort_SoA();

const QuickSort: FC = () => {
    return (
        <React.Fragment>
            <h1>Selection sort</h1>
            <br/>
            <RandomArray algorithm = {algorithm}/>
        </React.Fragment>
    )
}

export default QuickSort