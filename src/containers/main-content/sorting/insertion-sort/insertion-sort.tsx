import React, {FC} from 'react';
import InsertionSort_SoA from "../../../../classes/sorting/Insertion-sort_SoA";
import RandomArray from "../../../../components/random-array/random-array";

const algorithm = new InsertionSort_SoA();

const InsertionSort: FC = () => {
    return (
        <React.Fragment>
            <h1>Insertion sort</h1>
            <br/>
            <RandomArray algorithm = {algorithm}/>
        </React.Fragment>
    )
}

export default InsertionSort