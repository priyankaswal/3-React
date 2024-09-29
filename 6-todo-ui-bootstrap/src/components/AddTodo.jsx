import Buttons from "./Buttons";

function AddTodo() {
  const addHandler = () =>{
    console.log('Trying to add handler');
    
  }
  return <div className="container ">
  <div className="row kg-row">
    <div className="col-6">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Todo Here"
      ></input>
    </div>
    <div className="col-4">
      <input type="date" className="form-control" />
    </div>
    <div className="col-2">
      <Buttons type='success' btnText='Add' handler={addHandler}/>
    </div>
  </div>
</div>
}

export default AddTodo;
