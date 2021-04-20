import React, {Dispatch, FC, useState} from 'react';
import {Button, ButtonGroup, TextField} from "@material-ui/core";
import BubbleSort_SoA from "../../../../classes/sorting/Bubble-sort_SoA";
import ArrayCreator from "../../../../classes/RandomArrayCreator";

type arraySettings = {
    capacity:number,
    min:number,
    max:number,
}

const createArray = (setArray: React.Dispatch<React.SetStateAction<number[]>>,
                     arraySettings: arraySettings,
                     setArrayStatus: React.Dispatch<React.SetStateAction<boolean>>) => {
    const array = ArrayCreator.generateRandomArray(arraySettings.capacity, arraySettings.min, arraySettings.max)
    setArray(array);
    setArrayStatus(true);
}

const BubbleSort: FC = () => {

    const [array, setArray] = useState([1])

    const [arraySettings, setArraySettings] = useState({capacity:20, min:0, max:100})

    const [arrayStatus, setArrayStatus] = useState(false)

    const Sort = new BubbleSort_SoA();

    const doSorting = () => {
        console.log(Sort.sort(array));
    }

    const handleArraySettingsChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,setting: string) => {
        switch (setting) {
            case 'capacity':
                setArraySettings({
                    ...arraySettings,
                    capacity: parseInt(e.target.value),
                })
                break;
            case 'min':
                setArraySettings({
                    ...arraySettings,
                    min: parseInt(e.target.value),
                })
                break;
            case 'max':
                setArraySettings({
                    ...arraySettings,
                    max: parseInt(e.target.value),
                })
                break;
            default:
                return
        }
    }

    const createText = !arrayStatus ? "Create array" : "Recreate array"

    return (
        <React.Fragment>
            <h1>Bubble sort</h1>
            <br/>
            <TextField
                label="Capacity"
                variant="outlined"
                onChange={(e) => {
                    handleArraySettingsChange(e, 'capacity')
                }}
                value={arraySettings.capacity}
            />
            <br/><br/>
            <TextField
                label="Min"
                variant="outlined"
                onChange={(e) => {
                    handleArraySettingsChange(e, 'min')
                }}
                value={arraySettings.min}
            />
            <br/><br/>
            <TextField
                label="Max"
                variant="outlined"
                onChange={(e) => {
                    handleArraySettingsChange(e, 'max')
                }}
                value={arraySettings.max}
            />
            <br/><br/>
            <ButtonGroup
                variant={"contained"}
                color={"primary"}
                onClick={() => { doSorting() } }
            >
                <Button
                    onClick={() => {
                        createArray(setArray, arraySettings, setArrayStatus)
                    }}
                >
                    {createText}
                </Button>
            </ButtonGroup>
        </React.Fragment>
    )
}

export default BubbleSort