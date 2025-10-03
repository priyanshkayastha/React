import React, { useRef } from "react";

const UseRef2 = () => {
  const renderCount = useRef(0);

  const increment = () => {
    renderCount.current += 1;
    console.log(renderCount.current);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      {/* <p>{renderCount.current}</p> */}
    </div>
  );
};

export default UseRef2;
