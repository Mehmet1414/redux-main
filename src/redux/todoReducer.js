const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
      };

    case "DEL_TODO":
      const filtredTodos = state.todos.filter((e) => e.id !== action.payload);
      return {
        todos: filtredTodos,
      };

    case "EDIT_TODO":
      const cloneTodos = state.todos; //diziyi clone yaptik: splice metodu icin

      const index = cloneTodos.findIndex((e) => e.id === action.payload);

      cloneTodos.splice(index, 1, {
        ...cloneTodos[index],
        isDone: !cloneTodos[index].isDone,
      });
      return {
        todos: cloneTodos,
      };

    case "CLEAR":
      const durum = window.confirm("Dikkat!!! Tüm Liste Silinecek...");

      if (durum) {
        return { todos: [] };
      } else {
        return state;
      }
    case "RES_TODOS":
      return {
        todos: action.payload,
      };

    default:
      return state;
  }
};

export default todoReducer;
