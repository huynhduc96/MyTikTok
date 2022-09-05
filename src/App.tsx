import React, { useState, useReducer, useRef } from "react";
import "./App.css";

// init

const initState = {
  job: "",
  jobs: [],
};

// action

const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload: string) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload: string) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

// Reducer

const reducer = (state: { job: string; jobs: string[] }, action: any) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };

    case ADD_JOB:
      return {
        job: "",
        jobs: [...state.jobs, action.payload],
      };
    default:
      throw new Error("invalid action");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  const { job, jobs } = state;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    dispatch(addJob(job));
    inputRef.current?.focus();
  };

  return (
    <div className="App">
      <h3>TODO APP</h3>
      <input
        ref={inputRef}
        placeholder="enter todo"
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>ADD</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job} &times;</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
