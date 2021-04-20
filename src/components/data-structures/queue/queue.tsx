import React, {FC, useState} from 'react';
import QueueDS from "../../../classes/data-structues/queue_DS";
import {ButtonGroup, Button, TextField} from "@material-ui/core";

type props = {
    object: QueueDS<string>,
}

const QueueComponent: FC<props> = ({object}) => {

    const [input, setInput] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput(e.target.value);
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | MouseEvent>, method: string) => {
        switch (method) {
            case 'enqueue':
                object.enqueue(input);
                break;
            case 'dequeue':
                console.log(`Dequeued - ${object.dequeue()}`);
                break;
            case 'size':
                console.log(`Size - ${object.size()}`);
                break;
            case 'printInConsole':
                console.log(`Queue`,object)
                break;
            default:
                return
        }
        setInput('');
    }

    return (
        <React.Fragment>
            <hr/>
            <TextField
                name={'input'}
                type="text"
                label={"Value"}
                variant="outlined"
                value={input}
                onChange={(e) => {handleChange(e)}}
            />
            <br/>
            <br/>
            <ButtonGroup color="primary" variant={'contained'} aria-label="outlined primary button group">
                <Button
                    onClick={(e) => {
                        handleClick(e, 'enqueue')
                    }}>Enqueue</Button>
                <Button
                    onClick={(e) => {
                        handleClick(e, "dequeue")
                    }}>Dequeue</Button>
                <Button
                    onClick={(e) => {
                        handleClick(e, "size")
                    }}>Size</Button>
                <Button
                    onClick={(e) => {
                        handleClick(e, "printInConsole")
                    }}>Print in console</Button>
            </ButtonGroup>
        </React.Fragment>
    );
}


export default QueueComponent;