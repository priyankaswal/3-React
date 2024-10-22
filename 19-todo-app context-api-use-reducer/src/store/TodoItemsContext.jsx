import { createContext, useReducer } from "react";
import { TodoItemsReducer } from "./TodoItemsReducer";

const TodoItemsContext = createContext();

export const TodoItemsProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(TodoItemsReducer, []);

  const addTodoItem = (todoText, todoDate) => {
    dispatchTodoItems({
      type: "ADD_ITEM",
      payload: {
        todoText,
        todoDate,
      },
    });
  };

  const deleteTodoItem = (todoId) => {
    dispatchTodoItems({
      type: "DELETE_ITEM",
      payload: {
        todoId,
      },
    });
  };

  return (
    <TodoItemsContext.Provider
      value={{ todoItems, addTodoItem, deleteTodoItem }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContext;
