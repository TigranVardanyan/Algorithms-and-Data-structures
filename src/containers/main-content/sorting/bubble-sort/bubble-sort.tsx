import React, { FC } from 'react';
import {Button} from "@material-ui/core";
import BubbleSort_SoA from "../../../../classes/sorting/Bubble-sort_SoA";
import ArrayCreator from "../../../../classes/RandomArrayCreator";
// import BarChart from "../../../../components/bar-chart/bar-chart";

import * as d3 from 'd3'
import * as scale from 'd3-scale'

import classes from "./bubble-sort.module.css";



const BubbleSort: FC = () => {

    const array = ArrayCreator.generateRandomArray(100,1,100);

    const Sort = new BubbleSort_SoA();


    const w = 1000;
    const h = 1000;
    console.log()


    const wrapper =  d3.select('div#d3')
        .append('svg')
        .attr('width', w)
        .attr('height', h)
        .style('color', "red")
        .style('padding', 5)
        .style('background-color', "#ccc")
        .style('margin-left', 5)
        .selectAll('rect')
        .data(Sort.sort(array))
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * 10)
        .attr('y', (d, i) => h - 10 * d)
        .attr('width', 5)
        .attr('height', (d, i) => d * 10)
        .attr('fill', 'tomato')

    console.log(wrapper)
    return (
        <React.Fragment>
            <h1>Bubble ssort</h1>
            <Button
                variant={"contained"}
                color={"primary"}
                // onClick={() => { sorting() } }
            >
                Bubble Sort
            </Button>

            <div id="d3">a</div>

        </React.Fragment>
    )
}

export default BubbleSort