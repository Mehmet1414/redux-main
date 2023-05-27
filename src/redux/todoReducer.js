const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
      };

    default:
        
        return state;
  }
  
};

export default todoReducer;
