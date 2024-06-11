import React, { useEffect, useRef, useState } from "react";
import Input from "./components/Input";

export default function App() {
  const inputRef = useRef();
  const [value, setValue] = useState();
  const handleFocus = () => {
    inputRef.current.focus();
  };
  const handleSetValue = () => {
    inputRef.current.value = "Hello anh em";
  };
  const handleGetValue = () => {
    setValue(inputRef.current.value);
  };
  useEffect(() => {
    console.dir(inputRef.current);
    inputRef.current.remove();
  }, []);
  return (
    <div>
      <Input ref={inputRef} />
      <hr />
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleSetValue}>Set Value</button>
      <button onClick={handleGetValue}>Get Value</button>
      <div>Kết quả: {value}</div>
    </div>
  );
}
