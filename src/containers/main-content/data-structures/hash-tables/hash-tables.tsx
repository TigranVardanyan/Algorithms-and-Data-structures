import React, { FC } from 'react';
import Hash_tables_DS from "../../../../classes/data-structues/Hash_tables_DS";


const Hash_tables: FC = () => {


    let hashTable = new Hash_tables_DS(17);
    console.log(hashTable.set('indianRed', '#CD5C5C'))
    console.log(hashTable.set('black', '#000000'))
    console.log(hashTable.set('red', '#FF0000'))
    console.log(hashTable.set('maroon', '#800000'))
    console.log(hashTable.set('yellow', '#FFFF00'))
    console.log(hashTable.set('purple', '#800080'))
    console.log(hashTable.set('violet', '#800080'))
    console.log(hashTable.set('brown', '#A52A2A'))
    console.log(hashTable.set('olive', '#808000'))
    console.log(hashTable.set('olive', '#E80800'))


    console.log(hashTable)
    console.log(hashTable.get('yellow'))
    console.log(hashTable.values())
    console.log(hashTable.keyes())
    return (
        <React.Fragment>
            <h1> Hash tables </h1>

        </React.Fragment>
    );
}


export default Hash_tables;