import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  todoList: []
};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo (state, action) {
      action.payload !== '' ?
      state.todoList.push({
        id: new Date().toISOString(),
        text: (action.payload),
        completed: false
      }) : null;
    },
    removeTodo (state, action) {
      state.todoList = state.todoList.filter(todo => todo.id !== action.payload.id)
    },
    toggleTodo (state, action) {
      const todoDone = state.todoList.find(todo => todo.id === action.payload.id)
      todoDone.completed = !todoDone.completed
    }
  },
});

export const { addTodo, removeTodo, toggleTodo } = TodoSlice.actions;

export const todosReduser = TodoSlice.reducer;
