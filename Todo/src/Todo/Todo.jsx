import React, { useReducer, useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import "./Todo.css";
import { initialState, TodoReducer } from "./TodoReducer";

function Todo() {
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [inputForEdit, setInputForEdit] = useState("");
  const [editingId, setEditingId] = useState(null);  // Track the ID of the item being edited

  const handleAdd = () => {
    if(input===""){
        return
    }
    setCount((prev) => prev + 1);
    dispatch({ type: "add", payload: { id: count, Name: input } });
    setInput("");
  };

  const handleEdit = (id) => {
    if (inputForEdit !== "") {
      dispatch({ type: "edit", payload: { id:editingId, Name: inputForEdit } });
      setInputForEdit("");
      setEditingId(null); // Reset edit state after saving the task
    } else {
      setEditingId(id); // Start editing this task
    }
  };

  return (
    <div className="todo-container">
      <h1>Modern Todo App</h1>
      <div className="todo-input-container">
        <input
          type="text"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>
          <FaPlus /> Add
        </button>
      </div>
      <div className="todo-list">
        {state.todo.map((v) => (
          <div key={v.id} className="todo-item">
            {editingId === v.id ? (
              <input
                style={{ width: "9rem", marginRight: "0.5rem" }}
                type="text"
                value={inputForEdit}
                onChange={(e) => setInputForEdit(e.target.value)}
              />
            ) : (
              <div className="todo-name">{v.Name}</div>
            )}

            <div className="todo-actions">
              <button className="edit-btn" onClick={() => handleEdit(v.id)}>
                <FaEdit /> {editingId === v.id ? "Save" : "Edit"}
              </button>
              <button
                className="delete-btn"
                onClick={() =>
                  dispatch({ type: "remove", payload: { id: v.id } })
                }
              >
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
