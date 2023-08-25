import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main>
        <Advertisement />
      </Main>
    </div>
  );
}

export default App;


