import React, { useContext, useState } from "react";
import { ContextStore } from "./componet/ContextStore";
import "./TodoList.css";
let i=-1;
function TodoList() {
  let { todos, removeTodo, updateTodo } = useContext(ContextStore);

  const [value, setValue] = useState(""); // Initialize state variable for input value
  const [editMode, setEditMode] = useState(false); // Initialize state variable for edit mode
  function veryGoodFunction(id) {
    setEditMode(true);
    i=id;
    setValue("");

  }
  function sumit() {
    updateTodo(i, value);
    setEditMode(false);
    console.log(1);
   
  }
  return (
    <div>
      {editMode ? (
        <>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div onClick={sumit}>submit</div>
        </>
      ) : (
        todos.map(({ id, description }, i) => (
          <div className="square">
            <div key={i} className="amar">
              {description}
            </div>
            <div className="smallSize">
              <span onClick={() => removeTodo(id)}>remove</span>{" "}
              <span onClick={() => veryGoodFunction(id)}>update</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TodoList;
