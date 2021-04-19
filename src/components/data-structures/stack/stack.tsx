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

    push(item: T): void {
        if (this.size() === this.capacity) {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    }

    pop(): T | undefined {
        return this.storage.pop();
    }

    peek(): T | undefined {
        return this.storage[this.size() - 1];
    }

    size(): number {
        return this.storage.length;
    }
}

const stack = new StackDS<string>();
stack.push("A");
stack.push("B");

stack.size(); // Output: 2
stack.peek(); // Output: "B"
stack.size(); // Output: 2
stack.pop();  // Output: "B"
stack.size(); // Output: 1

const Stack: FC = () => {

    const [input, setInput] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | MouseEvent>, method: string) => {
        switch (method) {
            case "push":
            case "pop":
            case "size":
            case "peek":
            default:
                return
        }
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
                    handleClick(e, 'pop')
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

        </React.Fragment>
    );
}


export default Stack;