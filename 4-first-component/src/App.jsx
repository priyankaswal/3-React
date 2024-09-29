import "./App.css";
import Button from "./components/Buttons";
import DynamicComponent from "./components/DynamicComponent";
import Heading from "./components/Title";
import Paragraph from "./components/Paragraph";
import RandomNumber from "./components/RandomNumber";
import StudentList from "./components/StudentList";
import Title from "./components/Title";

function App() {
  const students = ['Priyank','Alok','Surya','Neeraj'];
  const newStudents = ['Ram','Shyam','Mohan','Sohan'];
  const clickMeHandler = () =>{
    console.log('clickMeHandler Clicked');
  }
  const delelteHandler = () =>{
    console.log('delelteHandler Clicked');
  }
  const sendHandler = () =>{
    console.log('sendHandler Clicked');
  }
  return (
    <>
      <Title titleText="Hello World"/>
      <Title titleText="KG Coding"/>
      <Title titleText="Subscribe"/>
      <Title titleText="Followers"/>
      <Heading> </Heading>
      <RandomNumber/>
      <RandomNumber/>
      <RandomNumber/>
      <RandomNumber/>
      <Paragraph></Paragraph>
      {/* <DangerButton></DangerButton>
      <SuccessButton /> */}
      <Button type='success' btnText='Click Me' handler={clickMeHandler}/>
      <Button type='danger' btnText='Delete' handler={delelteHandler}/>
      <Button  btnText='Send' handler={sendHandler}/>
      <DynamicComponent />
      <StudentList students={students}/>
      <StudentList students={newStudents}/>
    </>
  );
}

export default App;
