import React from 'react';
import Man from './Man';

function NameList() {
    const names = ['Vaishnav', 'Sujit', 'Amar']
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Vaishnav',
    //         age: 23,
    //         skill: 'Javascript'
    //     },
    //     {
    //         id: 2,
    //         name: 'Sujit',
    //         age: 21,
    //         skill: 'React'
    //     },
    //     {
    //         id: 3,
    //         name: 'Amar',
    //         age: 26,
    //         skill: 'Azure'
    //     }
    // ];

    const NameList = names.map(name => <h2 key={name}>{name}</h2>)
    return <div>{NameList}</div>;
}

export default NameList;
