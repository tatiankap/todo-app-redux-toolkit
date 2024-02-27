import todoSlice from "./todoSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: { todos: todoSlice.reducer }
});

export default store;