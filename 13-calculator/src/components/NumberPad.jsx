import Button from "./Button";

function NumberPad({ displayVal ,setDisplayVal}) {
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  const operations = [ "+", "-", "*", "/"];
  
  const handleOnClick = (text) =>{
    setDisplayVal(displayVal + text)
  };

  const evaluateExpression = () => {
    const result = eval(displayVal);
    setDisplayVal(result);
  }

  return (
    <>
    <Button onClickHandler={() => setDisplayVal('')} text="c"/>
    <br />
      {buttons.map((button) => (
        <Button onClickHandler={handleOnClick} key={button} text={button} />
      ))} 
      <br />
      {operations.map((button) => (
        <Button onClickHandler={handleOnClick} key={button} text={button} />
      ))} 
      <br />
      <Button onClickHandler={evaluateExpression} text="=" />
    </>
  );
}
export default NumberPad;
