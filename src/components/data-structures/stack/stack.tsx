import React, {FC, useState} from 'react';
import StackDS from "../../../classes/data-structues/stack_DS";
import {Button, ButtonGroup, TextField} from "@material-ui/core";

type props = {
    object: StackDS<string>
}

const StackComponent: FC<props> = ({object}) => {

    const [input, setInput] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput(e.target.value);
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | MouseEvent>, method: string) => {
        switch (method) {
            case 'push':
                object.push(input);
                break;
            case 'pop':
                object.pop();
                break;
            case 'peek':
                object.peek();
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
                            handleClick(e, 'push')
                        }}>Push</Button>
                    <Button
                        onClick={(e) => {
                            handleClick(e, "pop")
                        }}>Pop</Button>
                    <Button
                        onClick={(e) => {
                            handleClick(e, "peek")
                        }}>Peek</Button>
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
        </React.Fragment>
    );
}


export default StackComponent;