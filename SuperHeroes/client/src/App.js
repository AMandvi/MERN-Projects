import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  
  const [superheroes, setSuperHeroes] = useState([]);

  useEffect(() => {
    axiosHeroes();
  }, [])

  const fetchHeroes = () => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then((someRes) => {
        return someRes.json();
      })
      .then(data => {
        console.log(data);
        setSuperHeroes(data);
      })
      .catch(someErr => console.log(someErr))
  }

  const axiosHeroes = () => {
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then(res => {
        console.log(res.data);
        setSuperHeroes(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="App">
      <h1>SuperHeroes API</h1>
      <button onClick={fetchHeroes}>Fetch Superheroes</button>
      <button onClick={axiosHeroes}>axios superheroes</button>
      <hr />
      <br />

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Hero Name</th>
            <th>Full name</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          { superheroes.length > 1 ?
            (superheroes.map((hero, i) => {
              return (
                <tr key={hero.id}>
                  <td><img src={hero.images.sm} alt="" /></td>
                  <td>{hero.name}</td>
                  <td>{hero.biography.fullName ? hero.biography.fullName : "UNKNOWN"}</td>
                  <td>{hero.biography.publisher}</td>
                </tr>
              )
            })) : "loading"
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
