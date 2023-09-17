import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Views/Main';



function App() {
  return (
    <div className="App">
      <h1>Welcome to our products</h1>
      <Routes>
        <Route path="/" element={<Main/>} />
       
      </Routes>
    </div>
  );
}

export default App;
