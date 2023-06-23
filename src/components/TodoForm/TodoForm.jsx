import { useEffect, useState, useRef } from 'react'
const TodoForm = (props) => {
    const [input, setInput] = useState('')
    const inputRef = useRef(null)
    
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input
        })

        setInput('');
    }
    return (
        <form className={`input-group my-3 ${props.edit ? 'p-3': ''}`} onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => { setInput(e.target.value) }} ref={inputRef} value={input} className={`form-control border-2 ${props.edit ? 'border-warning' : 'border-primary'}`} placeholder="Add a Todo" />
            <button type="submit" onClick={handleSubmit} className={`btn ${props.edit ? 'btn-warning' : 'btn-primary'}`}>{props.edit ? 'Update' : 'Add Todo'}</button>
        </form>
    )
}

export default TodoForm