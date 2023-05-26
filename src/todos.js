import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, item: action.payload.item };
        }
        return todo;
      });
    },
    completeAll: (state) => {
      return state.map((todo) => ({ ...todo, completed: true }));
    },
    activeTodos: (state) => {
      return state.map((todo) => ({ ...todo, completed: false }));
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  editTodo,
  completeAll,
  activeTodos,
} = todosSlice.actions;
export default todosSlice.reducer;
