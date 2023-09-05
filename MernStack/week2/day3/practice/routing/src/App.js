import React from 'react';
import Home from './components/Home';
import NumberDisplay from './components/NumberDisplay';
import WordDisplay from './components/WordDisplay';
 
import { Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Link to="/home">Home</Link>{<Home />}
      <Link to="/4">Number</Link>{<NumberDisplay />}
      <Link to="/hello">Word</Link>{<WordDisplay />}
      <Link to="/hello/blue/red">Hello</Link>{<WordDisplay />}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:number" element={<NumberDisplay />} />
        <Route path="/:word" element={<WordDisplay />} />
        <Route path="/:word/:textColor/:bgColor" element={<WordDisplay />} />
        
        

      </Routes>
    </div>
  );
}

export default App;