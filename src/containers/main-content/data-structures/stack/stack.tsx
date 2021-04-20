import React, {Dispatch, FC, useState} from 'react';
import {TextField, Button, ButtonGroup} from "@material-ui/core";
import StackDS from "../../../../classes/data-structues/stack_DS";
import StackComponent from "../../../../components/data-structures/stack/stack";

import ReactDOM from "react-dom";

const createStackComponent = (capacity: number, setStatus: Dispatch<React.SetStateAction<boolean>>) => {
    const stackObject = new StackDS<string>(capacity);
    const node = <StackComponent object={stackObject}/>;
    ReactDOM.render(
        <React.StrictMode>
            {node}
        </React.StrictMode>,
        document.getElementById('stackComponent')
    );
    setStatus(true);
}

const unmountStackComponent = (setStatus: Dispatch<React.SetStateAction<boolean>>) => {
    ReactDOM.unmountComponentAtNode(document.getElementById('stackComponent')!);
    setStatus(false);
}

const Stack: FC = () => {

    const [capacity, setCapacity] = useState(10);

    const [objectStatus, setObjectStatus] = useState(false);

    const capacityChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCapacity(parseInt(e.target.value));
    }

    const createText = !objectStatus ? "Create Stack" : "Create Another Stack";

    return (
        <React.Fragment>
            <h1>Stack</h1>

            <TextField
                label={"Capacity"}
                onChange={(e) => {
                    capacityChangeHandler(e)
                }}
            />
            <br/><br/>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button
                    color="primary"
                    onClick={() => { createStackComponent(capacity, setObjectStatus) }}>
                    {createText}
                </Button>
                <Button
                    color="secondary"
                    disabled={!objectStatus}
                    onClick={() => { unmountStackComponent(setObjectStatus) }}
                >
                    Delete Queue
                </Button>
            </ButtonGroup>
            <br/><br/>
            <div id={'stackComponent'}/>
        </React.Fragment>
    );
}


export default Stack;