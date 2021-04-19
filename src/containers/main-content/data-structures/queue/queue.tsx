import React, {FC, useState} from 'react';
import { TextField, Button} from "@material-ui/core";

const Queue: FC = () => {

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


export default Queue;