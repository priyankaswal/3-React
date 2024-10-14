import { useState } from "react";
import List from "./components/List";

function App() {

  // const studentArrState = useState(["Priyank", "Deepak", "Depanshu", "Sorav", "Aman"]);
  // const studentArr = studentArrState[0];
  // // const setStudentArr = studentArrState[1];
  // console.log("State value is: ", studentArr);

  const [studentArr, setStudentArr] = useState([
    "Priyank",
    "Deepak",
    "Depanshu",
    "Sorav",
    "Aman",
  ]);

  console.log("Painting App component.");
  console.log("State value is: ", studentArr);

  const onChangeHandler = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      const newArr = [...studentArr, event.target.value];
      event.target.value ='';
      setStudentArr(newArr);
      console.log(newArr);
    }
  };
  return (
    <>
      <h1 className="text-5xl">Learners of MERN Stack</h1>
      <List list={studentArr} />
      <input
        type="text"
        placeholder="New Student Name"
        onKeyDown={onChangeHandler}
      />
    </>
  );
}

export default App;
