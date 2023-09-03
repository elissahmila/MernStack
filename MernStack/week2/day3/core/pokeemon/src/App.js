import './App.css';
import { useState } from 'react';

function App() {
  const [pokeemon, setPokeemon] = useState([])

  const fetchPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        console.log(res)
        setPokeemon(res.results) 
      })
      .catch(err => { console.log(err) })
  }
  
  return (
    <div className="App">
      <h1>Pokemon</h1>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            pokeemon.map((pkmn) => (
              <tr key={pkmn.name}>
                <td>{pkmn.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
