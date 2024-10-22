import { useContext, useEffect, useState } from "react";
import TodoItemsContext from "../store/TodoItemsContext";
import Button from "./Buttons";

const LoadItems = () => {
  const { todoItems, addAllTodoItems } = useContext(TodoItemsContext);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((items) => {
        const newItems = items.map((item) => ({
          id: item.id,
          todoText: item.task,
          todoDate: item.date,
        }));
        addAllTodoItems(newItems);
      })
      .finally(() => setIsLoading(false));
  }, []);

  // const loadItemsHandler = () => {
  //   fetch("http://localhost:3000/todos")
  //     .then((res) => res.json())
  //     .then((items) => {
  //       const newItems = items.map((item) => ({
  //         id: item.id,
  //         todoText: item.task,
  //         todoDate: item.date,
  //       }));
  //       addAllTodoItems(newItems);
  //     });
  //   console.log("load items");
  // };

  return (
    <>
      {isLoading && (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!isLoading && todoItems.length === 0 && <h2>Enjoy Your Day</h2>}
      {/* <Button btnText="Load Todos" handler={loadItemsHandler}></Button> */}
    </>
  );
};

export default LoadItems;
