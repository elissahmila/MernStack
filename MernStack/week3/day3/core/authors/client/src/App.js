import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import AuthorForm from './components/AuthorForm';
import DisplayAll from './components/DisplayAll';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App">
      <h2>Favorite Authors</h2>
      <Routes>
        <Route path="/" element={<DisplayAll />} />
        <Route path="/new" element={<AuthorForm />} />
        <Route path="/edit/:id" element={<EditAuthor />} />
      </Routes>
    </div>
  );
}

export default App;

