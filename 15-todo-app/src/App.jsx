import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import initialTodoItems from "./data/InitialTodoItems";

function App() {
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const addTodoItem = (todoText, todoDate) => {
    setTodoItems((currentItems) => {
      return [
        ...currentItems,
        { id: todoText, todoText, todoDate },
      ];
    });
  };

  const deleteTodoItem = (todoId) => {
    // const newTodoItems = todoItems.filter(item => item.id != todoId);
    // setTodoItems(newTodoItems);
    setTodoItems(currentItems => {
      return currentItems.filter(item => item.id != todoId);
    })
  }
  return ( 
    <>
      <center>
        <AppName />
        <AddTodo addTodoItem={addTodoItem}/>
        <TodoItems todoItems={todoItems} deleteTodoItem={deleteTodoItem}/>
      </center>
    </>
  );
}

export default App;
