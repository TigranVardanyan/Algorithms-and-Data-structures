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

export default StackDS