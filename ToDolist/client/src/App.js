import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import './App.css';
import DisplayToDos from './components/DisplayToDos';
import Form from './components/Form';

function App() {

  const [toDoItems, setTodoItems] = useState([{description: 'Get python black belt', completed: false}])
  
  const addToDo = (item) => {
    setTodoItems([...toDoItems, item])
  }

  const updateCompleted = (i) => {
    console.log("checked", i)
    const copy = [...toDoItems]
    copy[i].completed = !copy[i].completed
    setTodoItems(copy)
  }
  const deleteToDoItem = (i) => {
    const fiteredToDoItems = toDoItems.filter((b, ToDoIndex) => {
      console.log("index is: " + i)
      console.log("to do index is: " + ToDoIndex)
      console.log(i !== ToDoIndex)
      return i !== ToDoIndex
    })
    setTodoItems(fiteredToDoItems)
  }

  return (
    <div className="App">
      <br />
      <Form addToDo = {addToDo} />
      <br />
      <DisplayToDos toDoItems={toDoItems} updateCompleted={updateCompleted} deleteToDoItem={deleteToDoItem}/>
      
    </div>
  );
}

export default App;
