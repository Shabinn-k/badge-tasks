import React, { useState, useRef } from "react";
import "../css/Page1.css";
import Snowfall from "react-snowfall";

const Page1 = () => {
  const inputRef = useRef();
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [status, setStatus] = useState(false);

  const handleAddOrEdit = () => {
    const text = inputRef.current.value;
    if (!text.trim()) return;

    if (editId) {
      setList((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, text } : item
        )
      );
      setEditId(null);
    } else {
      setList((prev) => [
        ...prev,
        { id: Date.now(), text, deleted: false },
      ]);
    }

    inputRef.current.value = "";
  };

  const handleRemove = (id) => {
    setList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, deleted: true } : item
      )
    );
  };

  const handleUndo = (id) => {
    setList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, deleted: false } : item
      )
    );
  };

  const handleDelete = (id) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  const visible = list.filter((item) =>
    status ? item.deleted : !item.deleted
  );

  return (
    <div className="todo-container">
      <Snowfall color="green"/>
      <h1 className="todo-title">📝 To-Do App</h1>

      {!status && (
        <div className="todo-input-box">
          <input ref={inputRef} className="todo-input" />
          <button className="todo-add-btn" onClick={handleAddOrEdit}>
            {editId ? "Update" : "Add"}
          </button>
        </div>
      )}

      <div className="todo-header">
        <h4 className="todo-subtitle">
          {status ? "Deleted Items" : "Active Items"}
        </h4>
        <button className="todo-toggle" onClick={() => setStatus((p) => !p)}>
          {status ? "Active" : "Deleted"}
        </button>
      </div>

      <ul className="todo-list">
        {visible.map((item) => (
          <li className="todo-item" key={item.id}>
            <span className="todo-text">{item.text}</span>

            {!status && (
              <div className="todo-actions">
                <button
                  className="todo-edit"
                  onClick={() => {
                    inputRef.current.value = item.text;
                    setEditId(item.id);
                  }}
                >
                  Edit
                </button>
                <button
                  className="todo-remove"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            )}

            {status && (
              <div className="todo-actions">
                <button
                  className="todo-undo"
                  onClick={() => handleUndo(item.id)}
                >
                  Undo
                </button>
                <button
                  className="todo-delete"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page1;