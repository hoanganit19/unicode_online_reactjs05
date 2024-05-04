import React, { useContext } from "react";
import { ProviderContext } from "./store/utils/Provider";

export default function App() {
  const { state, dispatch } = useContext(ProviderContext);
  const handleIncrement = () => {
    dispatch({
      type: "counter/increment",
      payload: 10,
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "counter/decrement",
      payload: 5,
    });
  };
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
