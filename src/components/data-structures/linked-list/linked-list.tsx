import React, {FC, useState} from 'react';
import Button from '@material-ui/core/Button';
import {TextField} from "@material-ui/core";
import LinkedListDS from "../../../classes/data-structues/linked-list_DS";

type props = {
    object: LinkedListDS<any>
}

const LinkedListComponent: FC<props> = ({object}) => {

    const [input, setInput] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput(e.target.value);
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | MouseEvent>, method: string) => {
        switch (method) {
            case 'prepend':
                object.prepend(input);
                break;
            case 'append':
                object.append(input)
                break;
            case 'printInConsole':
                object.printInConsole()
                break;
            case 'toArray':
                console.log(object.toArray())
                break;
            default:
                return
        }
        setInput('');
    }
    return (
        <React.Fragment>
            <TextField
                name={'input'}
                type="text"
                label={"Value"}
                variant="outlined"
                value={input}
                onChange={(e) => handleChange(e)}
            />
            <br/>
            <br/>
            <Button
                variant="contained"
                color="primary"
                type={"submit"}
                onClick={(e) => {
                    handleClick(e, 'append')
                }}
            >
                Append
            </Button>
            <Button
                variant="contained"
                color="primary"
                type={"submit"}
                onClick={(e) => {
                    handleClick(e, 'prepend')
                }}
            >
                Prepend
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    console.log(object)
                }}
            >
                Console log
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={(e) => {
                    handleClick(e, 'toArray')
                }}
            >
                To array
            </Button>
            {/*toDo delete node*/}
            {/*toDo size*/}
        </React.Fragment>
    );
}


export default LinkedListComponent;