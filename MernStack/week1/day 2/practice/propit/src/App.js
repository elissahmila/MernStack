import './App.css';
import Firstcomp from './component/Firstcomp';
function App() {
  return (
    <div className="App">

      < Firstcomp lastname={"Doe"} firstname={"Jane"} age={45} hair={"Black"} />
      < Firstcomp lastname={"Smith"} firstname={"Jhon"} age={88} hair={"Brown"} />
      < Firstcomp lastname={"Fillmore"} firstname={"Millard"} age={50} hair={"Brown"} />
      < Firstcomp lastname={"Smith"} firstname={"Maria"} age={62} hair={"Brown"} />
    </div>
  );
}

export default App;
