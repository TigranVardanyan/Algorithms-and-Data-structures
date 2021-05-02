import React, { FC } from 'react';
import Hash_tables_DS from "../../../../classes/data-structues/Hash_tables_DS";


const Hash_tables: FC = () => {


    let hashTable = new Hash_tables_DS();
    console.log(hashTable.set('cyan', 'ff0000'))
    console.log(hashTable.set('red', 'ff00cc'))
    console.log(hashTable.set('blue', 'ff33cc'))
    console.log(hashTable.set('green', 'ff22cc'))
    console.log(hashTable.set('black', 'ff11cc'))
    console.log(hashTable.set('aqua', '4411cc'))
    console.log(hashTable.set('grey', 'ff11cc'))
    console.log(hashTable.set('white', 'ffffff'))

    console.log(hashTable)
    return (
        <React.Fragment>
            <h1> Hash tables </h1>

        </React.Fragment>
    );
}


export default Hash_tables;