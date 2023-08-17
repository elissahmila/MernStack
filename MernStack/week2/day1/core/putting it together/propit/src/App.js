import './App.css';
import Firstcomp from './component/pt.jsx';
function App() {
  return (
    <div className="App">

      < Firstcomp lastName={"Doe"} firstName={"Jane"} age={45} hair={"Black"} />
      < Firstcomp lastName={"Smith"} firstName={"Jhon"} age={88} hair={"Brown"} />
     
    </div>
  );
}

export default App;

