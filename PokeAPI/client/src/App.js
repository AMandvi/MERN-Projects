import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import DisplayPokemon from './components/DisplayPokemon';

function App() {
  const [listOfPokemons, setListOfPokemons] = useState([])

  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    .then(res => {
      console.log(res.data.results)
      setListOfPokemons(res.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      
      <button onClick = {axiosPokemon}>Fetchpokemon</button>

      <DisplayPokemon listOfPokemons={listOfPokemons}/>
    </div>
  );
}

export default App;
