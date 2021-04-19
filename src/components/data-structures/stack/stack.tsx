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

const stackDS = new StackDS<string>();

type ChildProps = {
    input: string,
    stack?: StackDS<string>
}

const Stack: FC<ChildProps> = () => {

    const [input, setInput] = useState('');

    const [capacity, setCapacity] = useState(0);

    const [stack, setStack] = useState(undefined);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput(e.target.value);
    }

    const handleCapacityChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCapacity(parseInt(e.target.value));
    }

    const handleCreateClick = (capacity: number) => {
        setStack(new StackDS(capacity));
        console.log(`Stack with capacity ${capacity} was created`);
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
            <div>
                <TextField
                    name={'input'}
                    type="number"
                    id={"linkedList"}
                    variant="outlined"
                    value={capacity}
                    onChange={(e) => handleCapacityChange(e)}
                />
                <br/>
                <Button
                    variant="contained"
                    color="primary"
                    type={"submit"}
                    onClick={(e) => {
                        handleCreateClick(capacity)
                    }}
                >
                    Create stack
                </Button>
            </div>
            <h1>Stack</h1>
            <TextField
                name={'input'}
                type="text"
                id={"linkedList"}
                variant="outlined"
                value={input}
                onChange={(e) => handleInputChange(e)}
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