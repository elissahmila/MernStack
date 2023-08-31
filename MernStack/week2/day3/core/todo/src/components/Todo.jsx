import React, { useState } from 'react';
import './App.css';

const Todo = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if (newTodo.length === 0) {
      return;
    }
    const TodoItem = {
      text: newTodo,
      complete: false,
    };
    setTodos([...todos, TodoItem]);
    setNewTodo('');
  };

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => i !== delIdx);
    setTodos(filteredTodos);
  };

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === idx) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <form onSubmit={(event) => handleNewTodoSubmit(event)}>
        <input
          onChange={(event) => setNewTodo(event.target.value)}
          type="text"
          value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>
      <hr />
      {todos.map((todo, i) => {
        const todoClasses = ['bold', 'italics'];
        if (todo.complete) {
          todoClasses.push('class1');
        }
        return (
          <div key={i}>
            <input
              onChange={() => handleToggleComplete(i)}
              checked={todo.complete}
              type="checkbox"
            />
            <span className={todoClasses.join(' ')}>{todo.text}</span>
            <button
              onClick={() => handleTodoDelete(i)}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Todo;
