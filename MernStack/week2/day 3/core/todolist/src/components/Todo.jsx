import React, { useState } from 'react';

const Todo = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() === '') {
      return;
    }
    const toDoItem = {
      text: newTodo,
      complete: false,
    };
    setTodos([...todos, toDoItem]);
    setNewTodo('');
  };

  const handleTodoDelete = (delIdx) => {
    const filterTodos = todos.filter((_, i) => {
      return i !== delIdx;
    });
    setTodos(filterTodos);
  };

  const handleTodoToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) =>
      i === idx ? { ...todo, complete: !todo.complete } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          handleNewTodoSubmit(event);
        }}
      >
        <input
          onChange={(event) => {
            setNewTodo(event.target.value);
          }}
          type="text"
          value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>
      <hr />
      {todos.map((todo, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleTodoToggleComplete(i)}
            />
            <span style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button
              onClick={() => {
                handleTodoDelete(i);
              }}
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

