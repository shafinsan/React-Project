import { createContext, useState } from "react";

export const ContextStore = createContext(null);

const Store = (props) => {
  let [todos, setTodo] = useState([]);
  const addTodo = (todo) => {
    setTodo([...todos, todo]);
  };
  const removeTodo = (id) => {
    setTodo(todos.filter((T) => T.id !== id));
  };
 
  const updateTodo = (id,description) => {
    setTodo(todos.map(todo=>todo.id===id?{...todo,description:description}:todo))
  };
  const temporaryValue = (id) => {};
  const contextValue = {
    addTodo,
    todos,
    removeTodo,
    updateTodo,
    temporaryValue,

  };
  return (
    <ContextStore.Provider value={contextValue}>
      {props.children}
    </ContextStore.Provider>
  );
};
export default Store;
