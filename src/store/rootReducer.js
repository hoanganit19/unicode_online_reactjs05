export const rootReducer = (state, action) => {
  switch (action.type) {
    case "counter/increment":
      return { ...state, count: state.count + action.payload };
    case "counter/decrement":
      return { ...state, count: state.count - action.payload };
    case "todo/add":
      return { ...state, todoList: [...state.todoList, action.payload] };
    default:
      return state;
  }
};

//type: feature/action (todos/add, todos/update, posts/add, posts/update,...)
