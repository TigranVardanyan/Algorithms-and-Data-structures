import React, {FC, useState} from 'react';
import Button from '@material-ui/core/Button';
import {TextField} from "@material-ui/core";

class Node {
    public data: object;
    public next: object;

    constructor(data: object = {}, next: object = {}) {
        this.data = data;
        this.next = next
    }
}

class LinkedListDS {
    private head: any;
    private tail: Node;

    constructor() {
        this.head = null;
        this.tail = new Node();
    }

    append(data: any) {
        const node = new Node(data)
        if (this.tail) {
            this.tail.next = node
        }
        if (!this.head) {
            this.head = node
        }
        this.tail = node
    }

    prepend(data: any) {
        const node = new Node(data, this.head)
        this.head = node
        if (!this.tail) {
            this.tail = node
        }
    }

    toArray() {
        const output = []
        let current = this.head

        while (current) {
            output.push(current)
            current = current.next
        }

        return output
    }

}

const list = new LinkedListDS()

const LinkedList: FC = () => {

    const [input, setInput] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput(e.target.value);
    }
    const handleClick = (e: React.MouseEvent<HTMLButtonElement | MouseEvent>, method: string) => {
        if (method === 'prepend') {
            list.prepend(input)
        } else if (method === 'append') {
            list.append(input)
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
                    }
                }
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
                console log
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    console.log(list.toArray())
                }}
            >
                To array
            </Button>
        </React.Fragment>
    );
}


export default LinkedList;