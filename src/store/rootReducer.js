import { counterReducer, counterState } from "./reducers/counterReducer";
import { todoReducer, todoState } from "./reducers/todoReducer";
import { combineReducers } from "./utils/core";

export const [rootReducer, initialState] = combineReducers({
  //key1: reducer1,
  //key2: reducer2,
  counter: [counterReducer, counterState],
  todo: [todoReducer, todoState],
});

//type: feature/action (todos/add, todos/update, posts/add, posts/update,...)
