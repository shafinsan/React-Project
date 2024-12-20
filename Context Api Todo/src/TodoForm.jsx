import React, { useState,useContext } from "react";
import './TodoForm.css'
import { ContextStore } from "./componet/ContextStore";

function TodoForm() {
  let [value, setValue] = useState("");
  const {addTodo}=useContext(ContextStore)
  function submit(e) {
    e.preventDefault();
    if(!value.trim())return
    addTodo({id:Date.now(),description:value,confirm:false});
    setValue("")
  }
  return (
    <>
      <div className="input">
        <form action="" onSubmit={(e) => submit(e)}>
          <input type="text" value={value}onChange={(e) => setValue(e.target.value)} />
        </form>
        <button onClick={submit}>submit</button>
      </div>
    </>
  );
}

export default TodoForm;
