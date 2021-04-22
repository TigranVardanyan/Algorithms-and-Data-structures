import React, { FC } from 'react';
import { Switch, Route } from "react-router-dom";
import LinkedList from "./data-structures/linked-list/linked-list";
import Queue from "./data-structures/queue/queue";
import Stack from "./data-structures/stack/stack";

import './main-content.css';
import BubbleSort from "../../containers/main-content/sorting/bubble-sort/bubble-sort";
import QuickSort from "../../containers/main-content/sorting/quick-sort/quick-sort";
import MergeSort from "../../containers/main-content/sorting/merge-sort/merge-sort";
import InsertionSort from "../../containers/main-content/sorting/insertion-sort/insertion-sort";
import SelectionSort from "../../containers/main-content/sorting/selection-sort/selection-sort";

const MainContent: FC = () => {
    return (
        <main className={'main'}>
            <Switch>
                <Route path="/bubble_sort">
                    <BubbleSort/>
                </Route>
                <Route path="/merge_sort">
                    <MergeSort />
                </Route>
                <Route path="/insertion_sort">
                    <InsertionSort />
                </Route>
                <Route path="/quick_sort">
                    <QuickSort />
                </Route>
                <Route path="/selection_sort">
                    <SelectionSort />
                </Route>
                <Route path="/linked_list">
                    <LinkedList />
                </Route>
                <Route path="/stack">
                    <Stack />
                </Route>
                <Route path="/queue">
                    <Queue />
                </Route>
                {/*<Route path="/">*/}
                {/*    Home page*/}
                {/*</Route>*/}
            </Switch>
        </main>
    );
};










export default MainContent;