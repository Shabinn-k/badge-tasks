import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from './TodoSlice';

function TodoRedux() {
    const dispatch = useDispatch()
    const item = useSelector(state => state.Todo.item)
    const [text, setText] = useState("");
    const [editId, setEditId] = useState(null)
    const handleAddOrEdit = () => {
        if (!text.trim()) return
        if (editId) {
            dispatch(editTodo({ id: editId, newTxt: text }))
            setEditId(null)
        } else {
            dispatch(addTodo(text))
        }
        setText("")
    }

    return (
        <div>
            <h1>TODO APP</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Something...' />
            <button onClick={handleAddOrEdit}>{editId ? "UPDATE" : "ADD"}</button>

            <ul>
                {item.map(items => (
                    <li key={items.id}>
                        <h3>{items.text}</h3>
                        <button onClick={() => { setEditId(items.id); setText(items.text) }}>EDIT</button>
                        <button onClick={() => dispatch(deleteTodo(items.id))}>DELETE</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoRedux