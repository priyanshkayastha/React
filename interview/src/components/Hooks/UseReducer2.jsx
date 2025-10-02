import React, { act, useReducer } from "react";

const initalState = { count: 0, text: "" };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "updateText":
      return { ...state, text: action.payload };

    case 'updateValue':
        return {...state,text:action.payload.value}

    default:
      throw new Error();
  }
}

const UseReducer2 = () => {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <>
      <p>{state.count}</p>
      <p>{state.text}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button
        onClick={() => dispatch({ type: "updateText", payload: "Hello" })}
      >
        Click me
      </button>
      <button onClick={()=>dispatch({type:'updateValue',payload:{value:0}})}>0</button>
    </>
  );
};

export default UseReducer2;
