export function logger(reducer: {
  (
    state: { todos: string[]; todoInput: string },
    action: { type: string; payload: string }
  ): { todoInput: string; todos: string[] };
  (arg0: any, arg1: any): any;
}) {
  return (prevState: any, action: { type: any }) => {
    console.group(action.type);

    console.log("Prev State", prevState);
    console.log("Action: ", action);
    const newState = reducer(prevState, action);

    console.log("new State: ", newState);
    console.groupEnd();

    return newState;
  };
}
