import React, { useRef } from 'react'

const TestForm = () => {

  const firstName = useRef();
  const lastName = useRef();
  const dob = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(firstName.current.value);
    console.log(lastName.current.value);
    console.log(dob.current.value);  
  }

  // const handleOnChange = (event) =>{
  //   firstName.current = event.target.value;
  //   console.log(firstName.current);
  // }
  // ye jo maine abhi kiya same yhi kaam useRef se asani se ho jata hai. bs ek ref attribute input tag me lgana hota hai aur fir usse hmko us element ki current value mil jati hai.

  return (
    <div>

      <form action="" onSubmit={submitHandler}>
        <input type="text" /*onChange={handleOnChange}*/ ref={firstName} placeholder='First Name'/>
        <br />
        <input type="text" ref={lastName} placeholder='Last Name'/>
        <br />
        <label htmlFor="dob">DOB</label>
        <input id="dob" ref={dob} type="date" />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default TestForm
