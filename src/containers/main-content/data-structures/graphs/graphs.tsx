import React, { FC } from 'react';
import Graphs_DS from "../../../../classes/data-structues/Graphs_DS";


const Graphs: FC = () => {

    let graphs = new Graphs_DS();

    graphs.addVertex('Moscow')
    graphs.addVertex('Yerevan')
    graphs.addVertex('New York')
    graphs.addVertex('Yuzhno-Sakhalinsk')

    console.log(graphs)
    return (
        <React.Fragment>
            <h1> Graphs </h1>

        </React.Fragment>
    );
}


export default Graphs;