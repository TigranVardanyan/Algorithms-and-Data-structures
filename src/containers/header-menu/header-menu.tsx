import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BubbleSort from "../../components/sorting/bubble-sort/bubble-sort";
import MergeSort from "../../components/sorting/merge-sort/merge-sort";
import InsertionSort from "../../components/sorting/insertion-sort/insertion-sort";
import QuickSort from "../../components/sorting/quick-sort/quick-sort";
import SelectionSort from "../../components/sorting/selection-sort/selection-sort";

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
                    <Typography>{children}</Typography>
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
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <BubbleSort/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MergeSort/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <InsertionSort/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <QuickSort/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <SelectionSort/>
            </TabPanel>
        </div>
    );
}