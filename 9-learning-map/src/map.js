const todoItems = [
  { id: 1, todoText: "Buy Milk", todoDate: "4-Sept-2024" },
  { id: 2, todoText: "Go to Gym", todoDate: "11-July-2024" },
];

console.log("Starting using map");
const todoItemsText = todoItems.map((todoItem) => todoItem.todoText);
console.log(todoItemsText);
console.log("Ending using map");

// function convertObjectToTodoText(todoItem){
//   console.log(`Convert function was called with item ${JSON.stringify(todoItem)}
//   converting this to ${todoItem.todoText}`);
//   return todoItem.todoText;
// }
// console.log("Starting");
// const todoItemsText = [];
// todoItems.forEach(item => {
//   const str = convertObjectToTodoText(item);
//   todoItemsText.push(str);
// })
// console.log(todoItemsText);
// console.log("Ending");

// todoItems.map(item)