import './App.css';
import {Link,Routes, Route, Navigate} from 'react-router-dom';
import Main from './components/Main';
import Create from './components/Create';
import Edit from './components/Edit';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes>
        {/* MAIN-all notes */}
        <Route path='/' element={<Main/>} /> 
        {/* CREATE */}
        <Route path = "/new" element ={<Create/>}/>

        {/* UPDATE */}
        <Route path ="/edit/:id" element={<Edit/>}/>

        {/* REDIRECT */}
        {/* <Route path='*' element={<Navigate to = "/notes" replace/>} /> */}

        {/* VIEW ONE */}
        {/* <Route path='/notes/:id' element={<ViewOne/>} /> */}

      </Routes>

    </div>
  );
}

export default App;
