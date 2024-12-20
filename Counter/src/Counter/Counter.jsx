import React, { useReducer } from "react";
import { CounterReducer, initialState } from "./CounterReducer";
import './index.css'; // Import the CSS file

function Counter() {
  const [state, dispatch] = useReducer(CounterReducer, initialState);

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <div className="counter-value">Count: {state.count}</div>
      <div className="counter-buttons">
        <button onClick={() => dispatch({ type: "incriment" })}>
          Increment
        </button>
        <button
          className="reset"
          onClick={() => dispatch({ type: "" })}
        >
          Reset
        </button>
        <button onClick={() => dispatch({ type: "decriment" })}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
