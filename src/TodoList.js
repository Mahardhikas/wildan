import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  addTodo,
  deleteTodo,
  editTodo,
  completeAll,
  activeTodos,
} from './todos';

const TodoList = (props) => {
  const [todo, setTodo] = useState('');

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      };
      props.addTodo(newTodo);
      setTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    props.deleteTodo(id);
  };

  const handleEditTodo = (id, newItem) => {
    props.editTodo({
      id,
      item: newItem,
    });
  };

  const handleCompleteAll = () => {
    props.completeAll();
  };

  const handleActiveTodos = () => {
    props.activeTodos();
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={handleCompleteAll}>Complete All</button>
      <button onClick={handleActiveTodos}>Active</button>
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <div>
              {todo.item}
              <button onClick={() => handleEditTodo(todo.id, 'New Item')}>
                Edit
              </button>
              <button onClick={() => handleDeleteTodo(todo.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, {
  addTodo,
  deleteTodo,
  editTodo,
  completeAll,
  activeTodos,
})(TodoList);
