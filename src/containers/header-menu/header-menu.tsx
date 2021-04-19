import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import BubbleSort from "../../components/sorting/bubble-sort/bubble-sort";
import MergeSort from "../../components/sorting/merge-sort/merge-sort";
import InsertionSort from "../../components/sorting/insertion-sort/insertion-sort";
import QuickSort from "../../components/sorting/quick-sort/quick-sort";
import SelectionSort from "../../components/sorting/selection-sort/selection-sort";
import LinkedList from "../../components/data-structures/linked-list/linked-list";
import Queue from "../../components/data-structures/queue/queue";
import Stack from "../../components/data-structures/stack/stack";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Bubble sort" {...a11yProps(0)} />
                    <Tab label="Merge sort" {...a11yProps(1)} />
                    <Tab label="Insertion sort" {...a11yProps(2)} />
                    <Tab label="Quick sort" {...a11yProps(3)} />
                    <Tab label="Selection sort" {...a11yProps(4)} />
                    <Tab label="Linked list" {...a11yProps(5)} />
                    <Tab label="Stack" {...a11yProps(6)} />
                    <Tab label="Queue" {...a11yProps(7)} />
                </Tabs>
            </AppBar>
            <TabPanel children={<BubbleSort/>} value={value} index={0}/>
            <TabPanel children={<MergeSort/>} value={value} index={1}/>
            <TabPanel children={<InsertionSort/>} value={value} index={2}/>
            <TabPanel children={<QuickSort/>} value={value} index={3}/>
            <TabPanel children={<SelectionSort/>} value={value} index={4}/>
            <TabPanel children={<LinkedList/>} value={value} index={5}/>
            <TabPanel children={<Stack input={''}/>} value={value} index={6}/>
            <TabPanel children={<Queue/>} value={value} index={7}/>
        </div>
    );
}