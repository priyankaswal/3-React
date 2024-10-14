const Button = ({ text,onClickHandler }) => {
  return <button onClick={() => onClickHandler(text)}>{text}</button>;
};

export default Button;
