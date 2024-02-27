
import { useState } from 'react';
import TodoList from './todo/TodoList';
import TodoInput from './todo/TodoInput';
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../store/todoSlice';

export default function Main() {
    // const [todoList, setTodoList] = useState([]);
    const todoList = useSelector(state => state.todos);
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (todo.trim() === '') {
            return toast.error('The field cannot be empty')
        }
        dispatch(addTodo(todo))
        setTodo('');
    }

    const handleSetTodo = (value) => setTodo(value);

    const toggleCompleted = (id) => dispatch(toggleTodo(id));


    const handleDeleteTodo = (id) => dispatch(deleteTodo(id));

    const sortedTodoList = [...todoList].sort((a, b) => b.completed - a.completed);

    return (
        <div className="container d-flex flex-column h-100">
            <h1>Todo List</h1>
            <div className="row h-50 overflow-scroll mb-3">
                <TodoList todos={sortedTodoList} toggleCompleted={toggleCompleted} deleteTodo={handleDeleteTodo} />
            </div>
            <div className="row gy-5">
                <TodoInput todo={todo} handleSetTodo={handleSetTodo} handleAddTodo={handleAddTodo} />
            </div>
        </div>
    )
}
