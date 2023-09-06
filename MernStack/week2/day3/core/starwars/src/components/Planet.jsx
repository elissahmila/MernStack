import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function App() {
  const [resource, setResource] = useState('people');
  const [id, setId] = useState('');
  const history = useHistory();

  const handleResourceChange = (event) => {
    setResource(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = () => {
    history.push(`/${resource}/${id}`);
  };

  return (
    <div>
      <select value={resource} onChange={handleResourceChange}>
        <option value="people">People</option>
        <option value="planets">Planets</option>
    
      </select>
      <input
        type="number"
        placeholder="Enter ID"
        value={id}
        onChange={handleIdChange}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default App;
