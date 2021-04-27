import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import { Link } from "react-router-dom";
import './header-menu.css'

const useStyles = makeStyles({
    linkButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '14px 28px',
        margin: '4px 8px',
        textDecoration: 'none',
        display: "flex",
        justifyContent: 'center',
        alignItems:'center'
    },
});


export default function HeaderMenu() {
    const classes = useStyles();

    return (
        <div className={"menuSection"}>
            <Link className={classes.linkButton} to="/bubble_sort">Bubble sort</Link>
            <Link className={classes.linkButton} to="/merge_sort">Merge sort</Link>
            <Link className={classes.linkButton} to="/insertion_sort">Insertion sort</Link>
            <Link className={classes.linkButton} to="/quick_sort">Quick sort</Link>
            <Link className={classes.linkButton} to="/selection_sort">Selection sort</Link>
            <Link className={classes.linkButton} to="/linked_list">Linked list</Link>
            <Link className={classes.linkButton} to="/stack">Stack</Link>
            <Link className={classes.linkButton} to="/queue">Queue</Link>
            <Link className={classes.linkButton} to="/bst">BST</Link>
            <Link className={classes.linkButton} to="/binary_heaps">Binary heaps</Link>


        </div>
    );
}