import { ADD_TODO, SET_TODO_INPUT } from "./constants";

export const setTodoInput = (payload: string) => ({
  type: SET_TODO_INPUT,
  payload,
});

export const addTODO = (payload: string) => ({
  type: ADD_TODO,
  payload,
});
