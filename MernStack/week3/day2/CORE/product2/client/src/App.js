import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Details from './Details';

function App() {
  return (
    <div className="App">
      <h1>Welcome to our products</h1>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/MoreDetails/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
