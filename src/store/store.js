import { rootReducer } from "./rootReducer";

const initialState = {
  count: 0,
  todoList: ["Job 1", "Job 2", "Job 3"],
};
export const store = [rootReducer, initialState];
