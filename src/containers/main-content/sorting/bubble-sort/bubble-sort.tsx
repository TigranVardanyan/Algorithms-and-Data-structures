import React, { FC } from 'react';
import {Button} from "@material-ui/core";
import BubbleSort_SoA from "../../../../classes/sorting/Bubble-sort_SoA";
import ArrayCreator from "../../../../classes/RandomArrayCreator";
import * as d3 from "d3"

import classes from "./bubble-sort.module.css";



const BubbleSort: FC = () => {

    const array = ArrayCreator.generateRandomArray(100000,1,300);
    console.log(array)
    const Sort = new BubbleSort_SoA();

    const sorting = () => {
        console.log(Sort.sort(array));
    }

    const width = 500;
    const height = 500;
    const margin = 30;
    const padding = 5;

    var svg = d3.select('#d3').append('svg')
        .attr('class', classes.axis)
        .attr('width', width)
        .attr('height', height)

    var xAxisLength = width - 2 * margin;

    var yAxisLength = height - 2 * margin;

    var scaleX = d3.scale.linear()
        .domain([1, 13])
        .range([0, xAxisLength]);

    var scaleY = d3.scale.linear()
        .domain([100, 0])
        .range([0, yAxisLength]);

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

            <div id={'d3'}/>
        </React.Fragment>
    )
}

export default BubbleSort