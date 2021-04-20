import React, { FC } from 'react';
import {Button} from "@material-ui/core";
import ArrayCreator from "../../../../classes/RandomArrayCreator";
import QuickSort_SoA from "../../../../classes/sorting/Quick-sort_SoA";

const QuickSort: FC = () => {

    const array = ArrayCreator.generateRandomArray(50,1,100);
    console.log(array)
    const Sort = new QuickSort_SoA();

    const sorting = () => {
        console.log(Sort.quickSort(array));
    }



    return (
        <React.Fragment>
            <h1>Quick sort</h1>



            <Button
                variant={"contained"}
                color={"primary"}
                onClick={() => { sorting() } }
            >
                Quick Sort
            </Button>
        </React.Fragment>
    )
}

export default QuickSort