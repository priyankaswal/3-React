export const TodoItemsReducer = (currentItems, action) => {
  let newItems = currentItems;
  switch (action.type) {
    case "ADD_ITEM": {
      let todoText = action.payload.todoText;
      let todoDate = action.payload.todoDate;
      newItems = [...currentItems, { id: todoText, todoText, todoDate }];
      break;
    }
    case "DELETE_ITEM":
      newItems = currentItems.filter((item) => item.id != action.payload.todoId);
      break;
    default:
      break;
  }
  return newItems;
};