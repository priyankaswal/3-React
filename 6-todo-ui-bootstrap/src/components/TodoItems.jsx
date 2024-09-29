import TodoItem from "./TodoItem";

function TodoItems() {
  const todoItems = [
    { id: 1, todoText: "Buy Milk", todoDate: "4-Sept-2024" },
    { id: 2, todoText: "Go to Gym", todoDate: "11-July-2024" },
  ];
  return todoItems.map((item) => (
    <TodoItem
      key={item.id}
      id={item.id}
      todoText={item.todoText}
      todoDate={item.todoDate}
    />
  ));
}

export default TodoItems;

// in the above code why it is not working when i am writing todoItems.map inside {}
// This won't work because you're not returning JSX anymore—you're returning an object (the result of map() is wrapped inside {}).

//  but if i directly return the map, will it not treat it as JS
// When you directly return the map() function,
// React knows you're returning JSX elements as the result of map(). Even though you're writing JavaScript code, map() produces JSX components (<TodoItem />), and React automatically knows how to handle it without needing extra curly braces.
// You are directly returning the result of map(). React sees that you are returning a list of JSX elements, and it knows how to handle this correctly. No need for extra curly braces because you’re not embedding JavaScript inside another JSX block.
