
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Form from './component/Form';

function App() {
  return (
    <div className="App">
      <h1>Welcome to our products  </h1>
      <Routes>
        <Route path="/" element={<Form/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
