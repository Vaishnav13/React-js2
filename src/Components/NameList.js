import React from 'react';
import Man from './Man';

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Vaishnav',
            age: 23,
            skill: 'Javascript'
        },
        {
            id: 2,
            name: 'Sujit',
            age: 21,
            skill: 'React'
        },
        {
            id: 3,
            name: 'Amar',
            age: 26,
            skill: 'Azure'
        }
    ];

    const personList = persons.map(person => <Man key={person.name} person={person} />);

    return <div>{personList}</div>;
}

export default NameList;
