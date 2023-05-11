import React, {FC} from 'react'

interface Todo {
    id: number;
    name: string;
    complete: boolean;
}

interface TodoProps {
    todo: Todo;
    toggleTodo: Function;
}

const Todo:FC<TodoProps> = ({ todo, toggleTodo }) => {
    const handleTodoClick = () => {
        toggleTodo(todo.id)
    }
    return (
        <div>
            <label className='text-xl'>
                <input className='pr-0.5' type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                {todo.name}
            </label>
        </div>
    )
}

export default Todo;