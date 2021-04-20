import React, {Dispatch, FC, useState} from 'react';
import ReactDOM from "react-dom";
import { Button, ButtonGroup } from "@material-ui/core";
import LinkedListDS from "../../../../classes/data-structues/Linked-list_DS";
import LinkedListComponent from "../../../../components/data-structures/linked-list/linked-list";


const createLinkedListComponent = (setStatus: Dispatch<React.SetStateAction<boolean>>) => {
    const linkedListObject = new LinkedListDS<string>();
    const node = <LinkedListComponent object={linkedListObject}/>;
    ReactDOM.render(
        <React.StrictMode>
            {node}
        </React.StrictMode>,
        document.getElementById('linkedListComponent')
    );
    setStatus(true);
}

const unmountLinkedListComponent = (setStatus: Dispatch<React.SetStateAction<boolean>>) => {
    ReactDOM.unmountComponentAtNode(document.getElementById('linkedListComponent')!);
    setStatus(false);
}

const LinkedList: FC = () => {

    const [objectStatus, setObjectStatus] = useState(false);

    return (
        <React.Fragment>
            <h1>Linked list</h1>


            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button
                    color="primary"
                    onClick={() => { createLinkedListComponent(setObjectStatus) }}>
                    Create Linked List
                </Button>
                <Button
                    color="secondary"
                    disabled={!objectStatus}
                    onClick={() => { unmountLinkedListComponent(setObjectStatus) }}
                >
                    Delete Queue
                </Button>
            </ButtonGroup>
            <br/><br/>
            <div id={'linkedListComponent'}/>
        </React.Fragment>
    );
}


export default LinkedList;