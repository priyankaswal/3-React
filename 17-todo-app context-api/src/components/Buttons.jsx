
const Button = ({type, btnText, handler}) => {
  // we can define event listners here also but this is not the best choice instead we can paas behaviour as props as well. eg.
  // const onClickHandler = () =>{
  //   console.log('Button Clicked');
  // }

  if(type === 'success'){
    return <button className='btn btn-success button' onClick={handler}>{btnText}</button>
  }else if(type === 'danger'){
    return <button className='btn btn-danger button' onClick={handler}>{btnText}</button>
  }else{
    return <button className='btn btn-primary button' onClick={handler}>{btnText}</button>
  }
}

export default Button;

// export function DangerButton() {
//   return (
//     <button className="red-button"> Delete </button>
//   );
// }

// export function SuccessButton() {
//   return (
//     <button className="green-button"> Save </button>
//   );
// }
// export default DangerButton;