import List from "./components/List";

function App() {
  // const studentArr = ["Priyank", "Deepak" , "Depanshu", "Sorav", "Aman"];
  let studentArr;
  return (
    <>
      <h1 className="text-5xl">Learners of MERN Stack</h1>
      <List list={studentArr}/>
    </>
  );
}

export default App;
