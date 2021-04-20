import React, {FC, useState} from 'react';
import ReactDOM from "react-dom";
import {Button} from "@material-ui/core";
import LinkedListDS from "../../../../classes/data-structues/linked-list_DS";
import LinkedListComponent from "../../../../components/data-structures/linked-list/linked-list";


const createLinkedListComponent = () => {
    const linkedListObject = new LinkedListDS();
    const node = <LinkedListComponent object={linkedListObject}/>;
    ReactDOM.render(
        <React.StrictMode>
            {node}
        </React.StrictMode>,
        document.getElementById('linkedListComponent')
    );
}

const LinkedList: FC = () => {

    return (
        <React.Fragment>
            <h1>Linked list</h1>

            <Button
                color="primary"
                onClick={() => { createLinkedListComponent() }}
            >
                Create Linked List
            </Button>

            <div id={'linkedListComponent'}/>
        </React.Fragment>
    );
}


export default LinkedList;