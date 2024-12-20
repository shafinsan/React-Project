const initialState = {
  todo: [],
};
const TodoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        todo: [
          ...state.todo,
          { id: action.payload.id, Name: action.payload.Name },
        ],
      };
    case "remove":
      return {
        ...state,
        todo: state.todo.filter((t) => t.id !== action.payload.id),
      };
    default:
      return {
        ...state,
        todo: state.todo.map((m) =>
          m.id === action.payload.id ? { ...m, Name: action.payload.Name } : m
        ),
      };
  }
};

export { initialState, TodoReducer };
