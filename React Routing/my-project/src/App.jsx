import React, { useEffect, useRef, useState } from "react";
import { useTodoStore } from "./store/Zustand/TodoZustand";

function App() {
  const { todo, addNew, removeUser, updateUser } = useTodoStore((state) => state);
  const [input, setInput] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(-Infinity);
  const [editInput, setEditInput] = useState("");
  const myRef=useRef()
  const addHandler = () => {
    if (!input.trim()) return; // Avoid adding empty names
    const obj = {
      id: Date.now(),
      Name: input,
    };
    addNew(obj);
    setInput("");
  };

  const editHandler = (id) => {
    setEdit(true);
    setEditValue(id);
  };

  const removeHandler = (id) => {
    removeUser(id);
  };

  const saveEditHandler = () => {
    updateUser(editValue, editInput);
    setEditValue(-Infinity);
    setEditInput("");
    setEdit(false);
  };
  useEffect(()=>{
    myRef.current.focus();
    console.log(myRef.current)
  },[])
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <label className="block text-lg font-semibold text-gray-700">Enter Your Name</label>
        <div className="flex gap-3 mt-2">
          <input
            ref={myRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isEdit}
          />
          <button
            onClick={addHandler}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>
      </div>

      <div className="max-w-lg mx-auto mt-8">
        {todo?.map((v) => (
          <div key={v.id} className="flex justify-between items-center bg-white p-4 mt-2 rounded-lg shadow-md">
            {isEdit && editValue === v.id ? (
              <div className="flex gap-3 w-full">
                <input
                  type="text"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                  className="flex-1 border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={saveEditHandler}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex gap-3 w-full items-center">
                <div className="flex-1 text-lg text-gray-800">{v.Name}</div>
                <div className="flex gap-3">
                  <button
                    onClick={() => editHandler(v.id)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removeHandler(v.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
