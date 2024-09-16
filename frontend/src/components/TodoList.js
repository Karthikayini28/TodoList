import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const api = 'https://todo-listapi-fgf9651o1-karthikayinis-projects.vercel.app//todos';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
//axios.defaults.withCredentials=true;
  useEffect(() => {
    axios.get(api)
      .then(res => setTodos(res.data))
      .catch(err => console.error(err));
  }, []);

  const addTodo = () => {
    axios.post(api, { text })
      .then(res => setTodos([...todos, res.data]))
      .catch(err => console.error(err));
    setText('');
  };

  const updateTodo = (id, completed) => {
    axios.patch(`${api}/${id}`, { completed })
      .then(res => setTodos(todos.map(todo => todo._id === id ? res.data : todo)))
      .catch(err => console.error(err));
  };

  const editTodo = (id, newText) => {
    axios.patch(`${api}/${id}`, { text: newText })
      .then(res => setTodos(todos.map(todo => todo._id === id ? res.data : todo)))
      .catch(err => console.error(err));
    setEditingId(null);
    setEditText('');
  };

  const deleteTodo = (id) => {
    axios.delete(`${api}/${id}`)
      .then(() => setTodos(todos.filter(todo => todo._id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">To-Do List Demo</h1>
      <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Add new todo" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
        <button className="btn btn-primary" onClick={addTodo}>Add Todo</button>
      </div>
      <ul className="list-group">
        {todos.map(todo => (
          <li key={todo._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => updateTodo(todo._id, !todo.completed)} 
                className="form-check-input me-2"
              />
              {editingId === todo._id ? (
                <input 
                  type="text" 
                  value={editText} 
                  onChange={(e) => setEditText(e.target.value)} 
                  className="form-control me-2"
                />
              ) : (
                <span>{todo.text}</span>
              )}
            </div>
            <div>
              {editingId === todo._id ? (
                <button 
                  className="btn btn-success btn-sm me-2" 
                  onClick={() => editTodo(todo._id, editText)}
                >
                  Save
                </button>
              ) : (
                <button 
                  className="btn btn-secondary btn-sm me-2" 
                  onClick={() => { setEditingId(todo._id); setEditText(todo.text); }}
                >
                  Edit
                </button>
              )}
              <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
