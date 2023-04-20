import React from 'react'
import {useState} from "react"

const Form = (props) => {

    const[toDoDescription, setToDoDescription] = useState("")

const submitToDo = (e) => {
    e.preventDefault()
    const todoCreate = {
        description: toDoDescription,
        completed: false
    }
    props.addToDo(todoCreate)
}

    return (
        <div>
            <form onSubmit={submitToDo}>
                <input type="text" onChange={(e) => setToDoDescription(e.target.value)} value = {toDoDescription}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form
