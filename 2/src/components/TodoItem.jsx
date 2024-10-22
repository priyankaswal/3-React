import React, { useContext } from "react";
import Buttons from "./Buttons";
import TodoItemsContext from "../store/TodoItemsContext";

function TodoItem({id,todoText, todoDate}) {
  
  const {deleteTodoItem} = useContext(TodoItemsContext);
  
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6 text-truncate">{todoText}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <Buttons type='danger' btnText='Delete' handler={()=> deleteTodoItem(id)}/>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
