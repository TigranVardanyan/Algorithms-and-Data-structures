//Linked list class

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

export default LinkedListDS