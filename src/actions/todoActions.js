function addTodo(todo) {
  return {
    type: "ADD_TODO",
    todo
  };
}

function removeTodoID(id) {
  return {
    type: "REMOVE_TODO_ID",
    id
  };
}

const methods = {
  addTodo,
  removeTodoID
}

export default methods;
