import { useState } from "react";
import Display from "./components/Display";
import NumberPad from "./components/NumberPad";

function App() {
  const [displayVal, setDisplayVal] = useState('');
  
  return (
    <div>
      <Display textToShow={displayVal} /> 
      <br />
      <NumberPad displayVal={displayVal} setDisplayVal={setDisplayVal}/>
    </div>
  );
}

export default App;
