import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Character({ match }) {
  const [character, setCharacter] = useState(null);
  const [homeworld, setHomeworld] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${match.params.id}`);
        setCharacter(response.data);

    
        const homeworldId = response.data.homeworld.split('/').slice(-2, -1)[0];
        const homeworldResponse = await axios.get(`https://swapi.dev/api/planets/${homeworldId}`);
        setHomeworld(homeworldResponse.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [match.params.id]);

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <img src="https://example.com/obi-wan-image.jpg" alt="Obi-Wan Kenobi" />
      </div>
    );
  }

  return (
    <div>
      {character && (
        <div>
          <h2>{character.name}</h2>
          <p>Height: {character.height}</p>
          <p>Mass: {character.mass}</p>
          <p>Homeworld: {homeworld?.name}</p>
          {homeworld && <a href={`/planet/${homeworld.id}`}>Homeworld</a>}
        </div>
      )}
    </div>
  );
}

export default Character;

