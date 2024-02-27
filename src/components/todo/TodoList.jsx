import TodoItem from './TodoItem'

export default function TodoList({ todos, ...rest}) {
    return (
        <>
            {
                todos.length > 0 ?
                    <ul className='list-group list-group-flush mb-3'>
                        {
                            todos.map(todo =>
                               <TodoItem key={todo.id} todo={todo} {...rest} />
                            )
                        }
                    </ul>
                    : <div>No todos</div>
            }
        </>
    )    
}
