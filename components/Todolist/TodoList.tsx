import React from 'react';
import Todo from './Todo'

interface Todos {
    id: number;
    name: string;
    complete: boolean;
}

interface TodoListProps {
    todos: Todos[];
    toggleTodo: Function
}

const TodoList:Function = ({ todos, toggleTodo }: TodoListProps) => {
    return todos.map(todo => {
        return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
    })
}

export default TodoList;