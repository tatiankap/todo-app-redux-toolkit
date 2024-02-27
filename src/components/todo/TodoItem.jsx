
export default function TodoItem({ todo, toggleCompleted, deleteTodo }) {
    const handleChange = () => {
        toggleCompleted(todo.id)
    }

    const handleDelete = () => {
        deleteTodo(todo.id)
    }

    return (
        <li className='list-group-item' key={todo.id}>
            <div className="form-check d-flex justify-content-between align-items-center">
                <input className="form-check-input" type="checkbox" checked={todo.completed} onChange={handleChange} />
                <label className="form-check-label">
                    {todo.text}
                </label>
                <button className="btn btn-outline-info rounded-circle" onClick={handleDelete}><i className="fa-solid fa-trash"></i></button>
            </div>
        </li>
    )
}
