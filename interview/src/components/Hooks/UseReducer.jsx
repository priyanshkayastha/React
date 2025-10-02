import React, { useReducer } from 'react'
const initalState={count:0}

function reducer(state,action){
    switch (action.type){
        case 'increment':
            return {count:state.count+1}
        
        case 'decrement':
            return {count:state.count-1}
        
        default:
            throw new Error()
    }
}

const UseReducer = () => {
    const [state,dispatch]=useReducer(reducer,initalState)
  return <>
    <p>{state.count}</p>
    <button onClick={()=> dispatch({type:'increment'})}>Increment</button>
    <button onClick={()=> dispatch({type:'decrement'})}>Decrement</button>
    </>
  
}

export default UseReducer