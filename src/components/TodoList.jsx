import { useDispatch, useSelector } from "../store/utils/hook";
import { addTodo } from "../store/actions/todoActions";
import { useState } from "react";
export default function TodoList() {
  const [name, setName] = useState("");
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTodo(name));
    setName("");
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form action="" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Tên..."
          onChange={handleChange}
          value={name}
          required
        />
        <button>Thêm</button>
      </form>
    </div>
  );
}
