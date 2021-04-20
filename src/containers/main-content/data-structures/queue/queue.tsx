import React, {Dispatch, FC, useState} from 'react';
import ReactDOM from "react-dom";
import {Button, TextField} from "@material-ui/core";
import QueueDS from "../../../../classes/data-structues/queue_DS";
import QueueComponent from "../../../../components/data-structures/queue/queue";


const createQueueComponent = (capacity: number, setStatus: Dispatch<React.SetStateAction<boolean>>) => {
    const queueObject = new QueueDS(capacity);
    const node = <QueueComponent object={queueObject}/>;
    ReactDOM.render(
        <React.StrictMode>
            {node}
        </React.StrictMode>,
        document.getElementById('queueComponent')
    );
    setStatus(true);
}

const unmountQueueComponent = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('queueComponent')!);
}

const Queue: FC = () => {

    const [capacity, setCapacity] = useState(10);

    const [objectStatus, setObjectStatus] = useState(false);

    const capacityChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCapacity(parseInt(e.target.value));
    }

    const createText = !objectStatus ? "Create Queue" : "Create Another Queue";

    return (
        <React.Fragment>
            <h1>Queue</h1>

            <TextField
                label={"Capacity"}
                onChange={(e) => {
                    capacityChangeHandler(e)
                }}
            />
            <br/>
            <Button
                color="primary"
                onClick={() => { createQueueComponent(capacity, setObjectStatus) }}
            >
                {createText}
            </Button>
            <Button
                disabled={!objectStatus}
                onClick={() => { unmountQueueComponent() }}>
                Delete Queue
            </Button>

            <div id={'queueComponent'}/>
        </React.Fragment>
    );
}


export default Queue;