import React, {FC, useState} from 'react';
import Button from '@material-ui/core/Button';
import {TextField} from "@material-ui/core";
import LinkedListDS from "../../../classes/data-structues/linked-list_DS";


const list = new LinkedListDS()
console.log(list)

type props = {
    object: LinkedListDS<any>
}
console.log(

)
const LinkedListComponent: FC<props> = () => {

    const [input, setInput] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput(e.target.value);
    }
    const handleClick = (e: React.MouseEvent<HTMLButtonElement | MouseEvent>, method: string) => {
        switch (method) {
            case 'prepend':
                list.prepend(input);
                break;
            case 'append':
                list.append(input)
                break;
            case 'printInConsole':
                list.printInConsole()
                break;
            case 'toArray':
                console.log(list.toArray())
                break;
            default:
                return
        }
        setInput('');
    }
    return (
        <React.Fragment>
            <h1>Linked list</h1>
            <TextField
                name={'input'}
                type="text"
                id={"linkedList"}
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
                    console.log(list)
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