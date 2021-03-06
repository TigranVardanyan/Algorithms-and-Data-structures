//random array component
//todo change this component name
import React, {FC, useState} from 'react';
import {Button, ButtonGroup, TextField} from "@material-ui/core";
import RandomArrayCreator from "../../classes/RandomArrayCreator";
import SoA from "../../classes/sorting/SoA"

type arraySettings = {
    capacity:number,
    min:number,
    max:number,
}

const createArray = (setArray: React.Dispatch<React.SetStateAction<number[]>>,
                     arraySettings: arraySettings,
                     setArrayStatus: React.Dispatch<React.SetStateAction<boolean>>) => {
    const array = RandomArrayCreator.generateRandomArray(arraySettings.capacity, arraySettings.min, arraySettings.max)
    setArray(array);
    setArrayStatus(true);
}

type props = {
    algorithm: SoA;
}

const RandomArray: FC<props> = ({algorithm} : props) => {

    const [array, setArray] = useState([1])

    const [arraySettings, setArraySettings] = useState({capacity:20, min:0, max:100})

    const [arrayStatus, setArrayStatus] = useState(false)

    const doSorting = (array: number[]) => {
        var start = performance.now();
        console.log(algorithm.sort(array));
        var time = performance.now() - start;
        console.log(`Time - ${time}`)
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

    const createText = !arrayStatus ? "Create array" : "Recreate array";

    return (
        <React.Fragment>
            <h1>Create array</h1>
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
            >
                <Button
                    onClick={() => {
                        createArray(setArray, arraySettings, setArrayStatus)
                    }}
                >
                    {createText}
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button
                    disabled={!arrayStatus}
                    onClick={() => {
                        doSorting(array)
                    }}
                >Sort array</Button>
            </ButtonGroup>
        </React.Fragment>
    )
}

export default RandomArray