import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from "react";
import "./App.css";
import { actions, useStore } from "./store";

function App() {
  const [state, dispatch] = useStore();

  const handleAdd = () => {
    dispatch(actions.addTODO(state.todoInput));
  };

  return (
    <div className="App" style={{ marginTop: "50px" }}>
      <input
        value={state.todoInput}
        placeholder="enter todo"
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      ></input>
      <button style={{ marginLeft: "30px" }} onClick={handleAdd}>
        Add
      </button>
      <ul>
        {state.todos.map((todo: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined, index: Key | null | undefined) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
     
    </div>
  );
}

export default App;
