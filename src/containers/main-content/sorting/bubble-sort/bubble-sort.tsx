import React, { FC } from 'react';
import {Button} from "@material-ui/core";
import BubbleSort_SoA from "../../../../classes/sorting/Bubble-sort_SoA";
import ArrayCreator from "../../../../classes/RandomArrayCreator";

const BubbleSort: FC = () => {

    const array = ArrayCreator.generateRandomArray(100000,1,300);
    console.log(array)
    const Sort = new BubbleSort_SoA();

    const sorting = () => {
        console.log(Sort.sort(array));
    }



    return (
        <React.Fragment>
            <h1>Bubble sort</h1>



            <Button
                variant={"contained"}
                color={"primary"}
                onClick={() => { sorting() } }
            >
                Bubble Sort
            </Button>
        </React.Fragment>
    )
}

export default BubbleSort