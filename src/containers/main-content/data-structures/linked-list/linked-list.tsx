import React, {FC, useState} from 'react';
import { TextField, Button} from "@material-ui/core";
import LinkedListDS from "../../../../classes/data-structues/linked-list_DS";

const LinkedList: FC = () => {

    return (
        <React.Fragment>
            <h1>Linked list</h1>

            <Button
                color="primary"
            >
                Create Linked List
            </Button>

            <div id={'linkedListContainer'}>

            </div>
        </React.Fragment>
    );
}


export default LinkedList;