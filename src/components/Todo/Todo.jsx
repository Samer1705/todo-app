import React, { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    })

    const submitUpdate = (value) => {
        updateTodo(edit.id, value)
        setEdit({ id: null, value: '' })
    }
    if (edit.id) return <TodoForm edit={edit} onSubmit={submitUpdate} />

    return todos.map((todo, index) => (
        <div key={index} className={`d-flex justify-content-between alert alert-primary m-2 ${todo.isComplete ? 'text-decoration-line-through' : ''}`}>
            <div key={todo.id} className='pointer' onClick={() => { completeTodo(todo.id) }}>
                {todo.text}
            </div>
            <div className="icons">
                <i className="mx-2 fa-regular fa-pen-to-square" onClick={() => setEdit({ id: todo.id, value: todo.text })}></i>
                <i className="mx-2 fa-solid fa-trash" onClick={() => removeTodo(todo.id)}></i>
            </div>
        </div>
    ))
}

export default Todo