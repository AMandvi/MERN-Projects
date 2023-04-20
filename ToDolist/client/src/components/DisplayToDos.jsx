import React from 'react'

const DisplayToDos = (props) => {
    return (
        <div>
            {props.toDoItems.map((item, i) => {
                return (
                    <div key={i}>
                        <div style={{textDecoration: item.completed ? "line-through" : "none", display: 'inline-block'}}>
                            {item.description}
                            
                        </div>
                        <input type="checkbox" 
                                checked = {item.completed}
                                onChange = {() => props.updateCompleted(i)}/>
                        <button onClick={() => {props.deleteToDoItem(i)}}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayToDos
