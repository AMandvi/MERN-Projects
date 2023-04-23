import React from 'react'

const DisplayPokemon = (props) => {
    return (
        <div>
            <ul>
                {props.listOfPokemons.map((pokemon, i) => {
                    return (
                        <li key = {i}>{pokemon.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default DisplayPokemon
