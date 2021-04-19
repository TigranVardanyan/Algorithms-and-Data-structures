import React, {FC, useState} from 'react';
import ReactDOM from "react-dom";
import {Button, TextField} from "@material-ui/core";
import LinkedListDS from "../../../../classes/data-structues/linked-list_DS";
import LinkedListComponent from "../../../../components/data-structures/linked-list/linked-list";
import QueueComponent from "../../../../components/data-structures/queue/queue";


const Queue: FC = () => {

    const [capacity, setCapacity] = useState(0);

    const capacityChangeHandler = (e) => {
        setCapacity(parseInt(e.target.value));
    }

    return (
        <React.Fragment>
            <h1>Linked list</h1>

            <TextField
                label={"capacity"}
                onChange={(e) => {
                    capacityChangeHandler(e)
                }}
            />
            <br/>
            <Button
                color="primary"
                onClick={(e) => {
                    const queueObject = new LinkedListDS();
                    const node = <QueueComponent capacity={capacity} object={queueObject}/>;
                    ReactDOM.render(
                        <React.StrictMode>
                            {node}
                        </React.StrictMode>,
                        document.getElementById('queueComponent')
                    );
                }}
            >
                Create Linked List
            </Button>

            <div id={'queueComponent'}></div>
        </React.Fragment>
    );
}


export default Queue;