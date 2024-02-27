
export default function TodoInput({ todo, handleSetTodo, handleAddTodo }) {
    return (
        <div className="input-group">
            <input type='text' value={todo} onKeyDown={e => e.keyCode === 13 && handleAddTodo()} onChange={e => handleSetTodo(e.target.value)} placeholder='Create a new todo...' className="form-control" />
            <button className="btn btn-outline-secondary" onClick={handleAddTodo}>Add Todo</button>
        </div>
    )
}
