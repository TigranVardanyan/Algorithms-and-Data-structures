import React, {FC, useState} from 'react';
import Button from '@material-ui/core/Button';
import {TextField} from "@material-ui/core";

class Node<T> {
    public next: Node<T> | null = null;
    public prev: Node<T> | null = null;

    constructor(public data: T) {
    }
}

interface ILinkedList<T> {
    append(data: T): Node<T>;

    prepend(data: T): Node<T>;

    getLast(node: Node<T>): Node<T>;

    deleteNode(node: Node<T>): void;

    printInConsole(linkedList: LinkedListDS<T>): void;

    toArray(): T[];

    size(): number;

    search(comparator: (data: T) => boolean): Node<T> | null;
}

class LinkedListDS<T> implements ILinkedList<T> {
    private head: Node<T> | null = null;

    public prepend(data: T): Node<T> {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        return node;
    }

    public getLast = (node: Node<T>): Node<T> => {
        return node.next ? this.getLast(node.next) : node;
    };

    public append(data: T): Node<T> {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            const lastNode = this.getLast(this.head);
            node.prev = lastNode;
            lastNode.next = node;
        }
        return node;
    }

    public deleteNode(node: Node<T>): void {
        if (!node.prev) {
            this.head = node.next;
        } else {
            const prevNode = node.prev;
            prevNode.next = node.next;
        }
    }

    public printInConsole(): void {
        console.log(this)
    }

    public toArray(): T[] {
        const array: T[] = [];
        if (!this.head) {
            return array;
        }

        const addToArray = (node: Node<T>): T[] => {
            array.push(node.data);
            return node.next ? addToArray(node.next) : array;
        };
        return addToArray(this.head);
    }

    public size(): number {
        return this.toArray().length;
    }

    public search(comparator: (data: T) => boolean): Node<T> | null {
        const checkNext = (node: Node<T>): Node<T> | null => {
            if (comparator(node.data)) {
                return node;
            }
            return node.next ? checkNext(node.next) : null;
        };

        return this.head ? checkNext(this.head) : null;
    }
}

const list = new LinkedListDS()
console.log(list)
const LinkedList: FC = () => {

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
            //toDo delete node
            //toDo size
        </React.Fragment>
    );
}


export default LinkedList;