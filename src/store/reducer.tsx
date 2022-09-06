import { ADD_TODO, SET_TODO_INPUT } from "./constants";

const initState = {
  todos: [] as string[],
  todoInput: "",
};

function reducer(
  state: { todos: string[]; todoInput: string },
  action: { type: string; payload: string }
) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      throw new Error("invalid action");
  }
}

export { initState };
export default reducer;
