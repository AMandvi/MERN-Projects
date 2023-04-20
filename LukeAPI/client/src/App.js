
import './App.css';
import {Link, Routes, Route} from 'react-router-dom';
import Planets from './components/Planets';
import Form from './components/Form';
import People from './components/People';


function App() {
  return (
    <div className="App">
      <Form/>

      <Routes>
        <Route path = '/people/:peopleId' element = {<People/>}></Route>
        <Route path = '/planets/:planetId' element = {<Planets/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
