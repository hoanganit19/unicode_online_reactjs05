export const todoState = {
  todoList: [],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "todo/add":
      return { ...state, todoList: [...state.todoList, action.payload] };
    default:
      return state;
  }
};
