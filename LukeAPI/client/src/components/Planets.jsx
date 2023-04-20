import React from 'react'
import {useState, useEffect}  from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Planets = (props) => {
    const[planet, setPlanet] = useState(null)

    const {planetId} = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${planetId}/`)
            .then (res => {
                console.log(res.data)
                setPlanet(res.data)
            })
            .catch (err => {
                console.log(err)
            })

    }, [planetId])





    return (
        <div>
            {
                planet ? (
                    <>
                    <h2>{planet.name}</h2>
                    <h3>Climate: {planet.climate}</h3>
                    <h3>Terrain: {planet.terrain}</h3>
                    <h3>Surface Water: {planet.surface_water}</h3>
                    <h3>Population: {planet.population}</h3>
                    </>

                ) : <>loading...</>
            }
        </div>
    )
}

export default Planets

