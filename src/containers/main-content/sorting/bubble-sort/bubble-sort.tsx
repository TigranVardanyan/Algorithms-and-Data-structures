import React, { FC } from 'react';
import BubbleSort_SoA from "../../../../classes/sorting/Bubble-sort_SoA";
import RandomArray from "../../../../components/random-array/random-array";

const algorithm = new BubbleSort_SoA();
const BubbleSort: FC = () => {

    return (
        <React.Fragment>
            <h1>Bubble sort</h1>
            <br/>
            <RandomArray algorithm={algorithm}/>
        </React.Fragment>
    )
}

export default BubbleSort