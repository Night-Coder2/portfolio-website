'use client';

import React, { FC, useState, useRef, useEffect } from "react";
import TodoList from "@/components/Todolist/TodoList";
import styles from '../../styles/Todolist.module.css'
import { v4 as uuidV4 } from "uuid"

const localStorageKey = "todolist.todos"

var executed:boolean = false

const Hello:FC = () => {
    const todoNameRef:any = useRef()
    const [todos, setTodos] = useState<any[]>([]);

    useEffect(() => {
        const storedTodos: any = () => {
            const storedData = localStorage.getItem(localStorageKey)
            if (storedData !=null) return JSON.parse(storedData)
        }
        if(storedTodos) {
            if(!executed){
                setTodos(storedTodos)
                executed = true
            }
        }

    }, [])

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(todos))
    }, [todos])

    function toggleTodo(id:String) {
        const newTodos = [...todos]
        const todo: any = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete;
        setTodos(newTodos)
    }

    function handleAddTodo(e:any){
        e.preventDefault()
        const name = todoNameRef.current.value;
        if(name == '') return;
        setTodos((prevTodos:any) => {
            return [...prevTodos, {id: uuidV4(), name: name, complete: false}]
        })
        todoNameRef.current.value = null;
    }

    const handleClearTodos = (e:any) => {
        e.preventDefault()
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }
    return (
        <>
            <div className={styles.div1}>
                <h2 className='p-1'>Your TodoList</h2>
                <br/>
                <form>
                    <input className={styles.input} ref={todoNameRef} type='text' />
                    <button className={styles.addTodo} type='submit' onClick={handleAddTodo}>Add Todo</button>
                    <button className={styles.clearComplete} onClick={handleClearTodos}>Clear Complete</button>
                </form>
                <div className='p-1'>{todos.filter(todo => !todo.complete).length} left to do</div>
                <br/>
                <div>
                    <TodoList todos={todos} toggleTodo={toggleTodo}/>
                </div>
            </div>
        </>
    )
}

export default Hello;