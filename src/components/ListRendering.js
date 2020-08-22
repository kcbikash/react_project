import React from 'react'
import Person from './Person'

function ListDisplay(){
    const name=['apple','mango','orange']
    const persons=[
        {
            id:1,
            name:'ram',
            age:10,
        },
        {
            id:2,
            name:'hari',
            age:10,
        },
        {
            id:3,
            name:'sita',
            age:20,
        },
    ]
    // const personList=persons.map(person=>(<h2>{person.id},{person.name},{person.age}</h2>))
    //const personList=persons.map(person=><Person key={person.id} person={person}/>)

    const personList=persons.map((person,index)=><h1 key={index}>{person.name}</h1>)

    return (
        // <div>
        //     <h4>{name[0]}</h4>
        //     <h4>{name[1]}</h4>
        //     <h4>{name[2]}</h4>
        // </div>

        // <div>
        //     {
        //         name.map(fruit=><h2>{fruit}</h2>)
        //     }
        // </div>

    <div>{personList}</div>
        
    )
}

export default ListDisplay