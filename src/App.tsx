import React from 'react';
import HeaderMenu from './containers/header-menu/header-menu';
import './App.css';
import MainContent from "./containers/main-content/main-content";
import {Typography} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

import {
    BrowserRouter as Router,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Typography variant={"h1"} className={""}>
                Algorithms And Data Structures
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <HeaderMenu/>
                </Grid>
                <Grid item xs={9}>
                    <MainContent/>
                </Grid>
            </Grid>
        </Router>
    );
}

export default App;
