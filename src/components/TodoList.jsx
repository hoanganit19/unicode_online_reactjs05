import { useSelector } from "../store/utils/hook";

export default function TodoList() {
  const todoList = useSelector((state) => state.todoList);
  return (
    <div>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
