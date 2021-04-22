import React, { FC } from 'react';
import MergeSort_SoA from "../../../../classes/sorting/Merge-sort_SoA";
import RandomArray from "../../../../components/random-array/random-array";

const algorithm = new MergeSort_SoA();

const BubbleSort: FC = () => {

    return (
        <React.Fragment>
            <h1>Merge sort</h1>
            <br/>
            <RandomArray algorithm={algorithm}/>
        </React.Fragment>
    )
}

export default BubbleSort