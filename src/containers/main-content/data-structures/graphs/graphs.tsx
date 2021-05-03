import React, { FC } from 'react';
import Graphs_DS from "../../../../classes/data-structues/Graphs_DS";


const Graphs: FC = () => {

    let graphs = new Graphs_DS();

    graphs.addVertex('Moscow')
    graphs.addVertex('Yerevan')
    graphs.addVertex('New York')
    graphs.addVertex('Washington')
    graphs.addVertex('Los Angeles')
    graphs.addEdge('Moscow', 'Yerevan')
    graphs.addEdge('New York', 'Washington')
    graphs.addEdge('New York', 'Los Angeles')
    graphs.addEdge('Washington', 'Los Angeles')
    // graphs.removeEdge('Yerevan', 'Moscow')
    graphs.removeVertex('New York')
    console.log(graphs)
    return (
        <React.Fragment>
            <h1> Graphs </h1>

        </React.Fragment>
    );
}


export default Graphs;