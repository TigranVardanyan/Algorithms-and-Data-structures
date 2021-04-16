import React, {FC, useState} from 'react';


class Node<T> {
    public next: Node<T> | null = null;
    public prev: Node<T> | null = null;
    constructor(public data: T) {}
}

interface Queue<T> {

}



class QueueDS<T> implements Queue<T> {

}

const list = new QueueDS()

const Queue: FC = () => {

    return (
        <React.Fragment>

        </React.Fragment>
    );
}


export default Queue;