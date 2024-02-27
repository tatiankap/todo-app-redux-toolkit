import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
const initialState = [];
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, { payload: todo }) {
            const newTodo = {
                completed: false,
                text: todo,
                id: Date.now()
            }
            state.push(newTodo);
            toast.info('New todo added to list')


        },
        deleteTodo: (state, { payload: id }) => {
            state = state.filter(item => item.id !== id);
            toast.info('Todo deleted');
            return state;
        },
        toggleTodo: (state, { payload: id }) => state.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo),
    }
});
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice; 