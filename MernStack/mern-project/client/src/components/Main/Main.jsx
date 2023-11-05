import React from 'react'
import './Main.css'
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <div className="main d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-center">
          organize your <br /> work and life, fianlly.
        </h1>
        <p>
          Become fucosed, and calm with <br />
          todo app. the world's #1 task manager app.
        </p>
        <Link className="Main-btn p-2" to={'/todo'}>Make Todo List</Link>
      </div>
    </div>
  );
}

export default Main