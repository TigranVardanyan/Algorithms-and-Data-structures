import React, {FC} from 'react';
import QuickSort_SoA from "../../../../classes/sorting/Quick-sort_SoA";
import RandomArray from "../../../../components/random-array/random-array";

const algorithm = new QuickSort_SoA();

const QuickSort: FC = () => {
    return (
        <React.Fragment>
            <h1>Quick sort</h1>
            <br/>
            <RandomArray algorithm = {algorithm}/>
        </React.Fragment>
    )
}

export default QuickSort