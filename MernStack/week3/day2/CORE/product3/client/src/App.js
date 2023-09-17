import './App.css'; 
import Details from './Views/Details';
import Main from './Views/Main';
import { Route, Routes } from 'react-router-dom';
import Update from './Views/Update';
import Delete from './Views/Delete';
function App() {
  return (
    <div className="App">
      <h1>Welcome to our products</h1>
      <Routes>    
    <Route path="/" element={<Main/>}/>
    <Route path="/MoreDetails/:id" element={<Details/>} />
    <Route path="/updateProduct/:id" element={<Update/>} />
    <Route path='/deleteproduct/:id' element={<Delete/>}/>
  </Routes>  
    </div>
  );
}

export default App;