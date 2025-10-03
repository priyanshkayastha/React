import React, { useRef } from 'react'

const UseRef = () => {
    const inputRef=useRef(null)

    const focusInput=()=>{
        inputRef.current.focus()
    }
  return <>

    <input type="text" ref={inputRef} />
    <button onClick={focusInput}>Focus Input</button>
  </>
  
}

export default UseRef