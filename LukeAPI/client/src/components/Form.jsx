import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {

    const [type, setType] = useState("people")

    const [id, setId] = useState(1)

    const nav = useNavigate()

    const handleTypeChange = (e) => {
        console.log(e.target.value)
        setType(e.target.value)
    }
    const submitHandler = (e) => {
        //     /people/1   /planets/1
        e.preventDefault()
        nav("/" + type + "/" + id)


    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                Search For: <select name="type" id="type" onChange={handleTypeChange} value={type}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                Id: <input 
                    type="number" 
                    min="1"
                    onChange ={(e) => setId(e.target.value)}
                    value={id}
                />
                <button>Search</button>
            </form>
        </div>
    )
}

export default Form
