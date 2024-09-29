import React from "react";
import Buttons from "./Buttons";
function TodoItem({id,todoText, todoDate}) {
  
  const deleteHandler = () =>{
    console.log(`Trying to delete ${id} ${todoText}`);
  }
  
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6 text-truncate">{todoText}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <Buttons type='danger' btnText='Delete' handler={deleteHandler}/>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
