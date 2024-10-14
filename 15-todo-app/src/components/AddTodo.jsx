import Buttons from "./Buttons";
import { useRef } from "react";

function AddTodo({ addTodoItem }) {
  const todoTextInput = useRef();
  const todoDateInput = useRef();

  const addHandler = () => {
    const todoText = todoTextInput.current.value;
    const todoDate = todoDateInput.current.value;
    todoTextInput.current.value = "";
    todoDateInput.current.value = "";
    addTodoItem(todoText, todoDate);
  };
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo Here"
            ref={todoTextInput}
          />
        </div>
        <div className="col-4">
          <input type="date" className="form-control" ref={todoDateInput} />
        </div>
        <div className="col-2">
          <Buttons type="success" btnText="Add" handler={addHandler} />
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
