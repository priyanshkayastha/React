import React from 'react'

const LiftState = ({count,onIncrement}) => {
  return <>
    <p>Count: {count}</p>
    <button onClick={onIncrement}>Increment</button>
  </>
  
}

export default LiftState