import React from "react";

const RenderList = ({ numbers }) => {
  const itemList = numbers.map((number,index) => (
    // <li key={number.toString()}>{number}</li>
    <li key={`${number}-${index }`}>{number}</li>
  ));
  return <ul>{itemList}</ul>;
};

export default RenderList;
