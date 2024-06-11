import React from "react";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <>
      <Counter />
      <TodoList />
    </>
  );
}

//Action Creator --> Hàm trả về action (object)
/*
File action tương ứng với 1 module: counter, todo, product,...
1 hàm trong 1 file action --> Thể hiện 1 action cụ thể: increment, decrement, add todo, update todo,...
*/
