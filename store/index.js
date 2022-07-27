import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { todosReduser } from "./slices/TodoSlice";


export const store = configureStore({
    reducer: {
      todos: todosReduser
    }
});

