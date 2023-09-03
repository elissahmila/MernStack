import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  
  const [pokeemon, setPokeemon] = useState([]);

  const AxiosPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
      .then((res) => {
        setPokeemon(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    AxiosPokemon();
  }, []);
    
    

  

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <button onClick={AxiosPokemon}>Fetch Pokemon</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {pokeemon.map((pkmn) => (
            <tr key={pkmn.name}>
              <td>{pkmn.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
