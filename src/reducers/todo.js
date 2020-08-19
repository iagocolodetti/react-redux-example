function todo(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [ 
        ...state, 
        {
          id: state.length === 0 ? 0 : state[state.length-1].id + 1,
          todo: action.todo
        }
      ];
    case "REMOVE_TODO_ID":
      return state = state.filter(s => s.id !== action.id);
    default:
      return state;
  }
}

export default todo;
