export const addTodo = (todo) => {
  return {
    type: "todo/add",
    payload: todo,
  };
};
