import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "./TodoSlice";
import "../css/TodoRedux.css";
import Snowfall from "react-snowfall";

function TodoRedux() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.Todo.item);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddOrEdit = () => {
    if (!text.trim()) return;

    if (editId) {
      dispatch(editTodo({ id: editId, newTxt: text }));
      setEditId(null);
    } else {
      dispatch(addTodo(text));
    }
    setText("");
  };

  return (
    <div className="rd-container">
        <Snowfall color="red"/>
      <h1 className="rd-title">🔥 Redux Todo App</h1>

      <div className="rd-input-box">
        <input
          className="rd-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter something..."
        />
        <button className="rd-add-btn" onClick={handleAddOrEdit}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      <ul className="rd-list">
        {item.map((items) => (
          <li className="rd-item" key={items.id}>
            <span className="rd-text">{items.text}</span>
            <div className="rd-actions">
              <button
                className="rd-edit"
                onClick={() => {
                  setEditId(items.id);
                  setText(items.text);
                }}
              >
                Edit
              </button>
              <button
                className="rd-delete"
                onClick={() => dispatch(deleteTodo(items.id))}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoRedux;
