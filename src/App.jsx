import React from "react";
import { useReducer } from "react";
// import { useState } from "react";

export default function App() {
  // const [count, setCount] = useState(0);

  const counterReducer = (state, action) => {
    switch (action.type) {
      case "COUNTER_INCREMENT":
        return { ...state, count: state.count + action.payload };
        break;
      default:
        return state;
    }
  };

  const initialState = {
    count: 0,
  };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrement = () => {
    dispatch({
      type: "COUNTER_INCREMENT",
      payload: 10,
    });
  };
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
