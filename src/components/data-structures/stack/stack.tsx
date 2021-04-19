import React, {FC, useState} from 'react';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
}

class StackDS<T> implements IStack<T> {
    private storage: T[] = [];

    constructor(private capacity: number = Infinity) {}

    public push(item: T): void {
        if (this.size() === this.capacity) {
            console.log("Stack has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    }

    public pop(): T | undefined {
        return this.storage.pop();
    }

    public peek(): T | undefined {
        return this.storage[this.size() - 1];
    }

    public size(): number {
        return this.storage.length;
    }
}

const stack = new StackDS<string>(5);

const Stack: FC = () => {

    const [input, setInput] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput(e.target.value);
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | MouseEvent>, method: string) => {
        switch (method) {
            case "push":
                stack.push(input);
                break;
            case "pop":
                console.log(stack.pop());
                break;
            case "size":
                console.log(stack.size())
                break;
            case "peek":
                console.log(stack.peek());
                break;
            default:
                return;
        }
        setInput('');
    }

    return (
        <React.Fragment>
            <h1>Stack</h1>
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
                    handleClick(e, 'push')
                }}
            >
                Push
            </Button>
            <Button
                variant="contained"
                color="primary"
                type={"submit"}
                onClick={(e) => {
                    handleClick(e, 'pop')
                }}
            >
                Pop
            </Button>
            <Button
                variant="contained"
                color="primary"
                type={"submit"}
                onClick={(e) => {
                    handleClick(e, 'peek')
                }}
            >
                Peek
            </Button>
            <Button
                variant="contained"
                color="primary"
                type={"submit"}
                onClick={(e) => {
                    handleClick(e, 'size')
                }}
            >
                Size
            </Button>
            <Button
                variant="contained"
                color="primary"
                type={"submit"}
                onClick={(e) => {
                    console.log(stack)
                }}
            >
                Print in console
            </Button>

        </React.Fragment>
    );
}


export default Stack;