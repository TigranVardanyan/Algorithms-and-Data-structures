import React, { FC } from 'react';

import './main-content.css';

import {
    Switch,
    Route,
} from "react-router-dom";

// import BubbleSort from "../../components/sorting/bubble-sort/bubble-sort";
// import MergeSort from "../../components/sorting/merge-sort/merge-sort";
// import InsertionSort from "../../components/sorting/insertion-sort/insertion-sort";
// import QuickSort from "../../components/sorting/quick-sort/quick-sort";
// import SelectionSort from "../../components/sorting/selection-sort/selection-sort";
import LinkedList from "./data-structures/linked-list/linked-list";
// import Stack from "../../components/data-structures/stack/stack";
// import Queue from "../../components/data-structures/queue/queue";

const MainContent: FC = () => {
    return (
        <main className={'main'}>
            <Switch>
                {/*// <Route path="/bubble_sort">*/}
                {/*//     <BubbleSort />*/}
                {/*// </Route>*/}
                {/*<Route path="/merge_sort">*/}
                {/*    <MergeSort />*/}
                {/*</Route>*/}
                {/*<Route path="/insertion_sort">*/}
                {/*    <InsertionSort />*/}
                {/*</Route>*/}
                {/*// <Route path="/quick_sort">*/}
                {/*//     <QuickSort />*/}
                {/*</Route>*/}
                {/*<Route path="/selection_sort">*/}
                {/*    <SelectionSort />*/}
                {/*</Route>*/}
                <Route path="/linked_list">
                    <LinkedList />
                </Route>
                {/*<Route path="/stack">*/}
                {/*    <Stack input={''}/>*/}
                {/*</Route>*/}
                {/*<Route path="/queue">*/}
                {/*    <Queue />*/}
                {/*</Route>*/}
                {/*<Route path="/">*/}
                {/*    Home page*/}
                {/*</Route>*/}
            </Switch>
        </main>
    );
};










export default MainContent;