import React, {FC, useState} from 'react';
import { TextField, Button} from "@material-ui/core";
import StackDS from "../../../../classes/data-structues/stack_DS";

const Stack: FC = () => {

    return (
        <React.Fragment>
            <h1>Linked list</h1>

            <Button
                color="primary"
            >
                Create Queue
            </Button>

            <div id={'linkedListContainer'}>

            </div>
        </React.Fragment>
    );
}


export default Stack;