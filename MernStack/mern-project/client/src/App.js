import './App.css';
import NavBar from './components/Navbar/NavBar';
import Main from './components/Main/Main';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import SignUp from './components/signup/SignUp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignIn from './components/signup/SignIn';
import Todo from './components/todo/Todo';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { authActions } from "./store";

function App() {
    const dispatch = useDispatch();

  useEffect(() => {
    const id =sessionStorage.getItem("id")
      if (id) {
        dispatch(authActions.login())
}

  })
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/todo" element={<Todo />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
