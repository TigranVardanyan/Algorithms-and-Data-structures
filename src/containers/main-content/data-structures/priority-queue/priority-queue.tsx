import React, { FC } from 'react';
import Priority_queue_DS from "../../../../classes/data-structues/Priority_queue_DS";



// const createLinkedListComponent = (setStatus: Dispatch<React.SetStateAction<boolean>>) => {
//     const linkedListObject = new LinkedListDS<string>();
//     const node = <LinkedListComponent object={linkedListObject}/>;
//     ReactDOM.render(
//         <React.StrictMode>
//             {node}
//         </React.StrictMode>,
//         document.getElementById('linkedListComponent')
//     );
//     setStatus(true);
// }
//
// const unmountLinkedListComponent = (setStatus: Dispatch<React.SetStateAction<boolean>>) => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('linkedListComponent')!);
//     setStatus(false);
// }

const Priority_queue: FC = () => {

    // const [objectStatus, setObjectStatus] = useState(false);

    let priorityQueue = new Priority_queue_DS();
    return (
        <React.Fragment>
            <h1> Binary heaps </h1>



            {/*<ButtonGroup color="primary" aria-label="outlined primary button group">*/}
            {/*    <Button*/}
            {/*        color="primary"*/}
            {/*        onClick={() => { createLinkedListComponent(setObjectStatus) }}>*/}
            {/*        Create Linked List*/}
            {/*    </Button>*/}
            {/*    <Button*/}
            {/*        color="secondary"*/}
            {/*        disabled={!objectStatus}*/}
            {/*        onClick={() => { unmountLinkedListComponent(setObjectStatus) }}*/}
            {/*    >*/}
            {/*        Delete Queue*/}
            {/*    </Button>*/}
            {/*</ButtonGroup>*/}
            {/*<br/><br/>*/}
            {/*<div id={'linkedListComponent'}/>*/}
        </React.Fragment>
    );
}


export default Priority_queue;