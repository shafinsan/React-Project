import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Store from './componet/ContextStore';
function App() {
  return (
    <Store>
      <div>
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Store>
  );
}

export default App;
