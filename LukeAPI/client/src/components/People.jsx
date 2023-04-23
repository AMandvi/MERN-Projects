import React from 'react'
import {useState, useEffect}  from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const People = (props) => {
    const[person, setPerson] = useState(null)

    const {peopleId} = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${peopleId}/`)
            .then (res => {
                console.log(res.data)
                setPerson(res.data)
            })
            .catch (err => {
                console.log(err)
            })

    }, [peopleId])





    return (
        <div>
            {
                person ? (
                    <>
                    <h2>{person.name}</h2>
                    <h3>Height: {person.height}</h3>
                    <h3>Mass: {person.mass}</h3>
                    <h3>Hair Color: {person.hair_color}</h3>
                    <h3>Skin Color: {person.skin_color}</h3>
                    </>

                ) : <>loading...</>
            }
        </div>
    )
}

export default People
