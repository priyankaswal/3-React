import React, { useRef, useState } from "react";

const StateVsRef = () => {
  console.log("Repaint");

  const [stateClick, setStateClick] = useState(0);
  const refClick = useRef(0);

  const onStateClickHandler = () => {
    console.log("State Clicked");
    // setStateClick(stateClick + 1);
    setStateClick(currentVal => currentVal + 1);
  };

  const onRefClickHandler = () => {
    refClick.current++;
    console.log("Ref Clicked");
  };
  return (
    <> 
      <h1>State Clicked: {stateClick} </h1>
      <h1>Ref Clicked: {refClick.current} </h1>
      <button onClick={onStateClickHandler}>State</button>
      <button onClick={onRefClickHandler}>Ref</button>
    </>
  );
};

export default StateVsRef;
