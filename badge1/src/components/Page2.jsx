import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../css/Page2.css";
import Snowfall from "react-snowfall";

function Page2() {
  const inputRef = useRef();
  const [names, setNames] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(true);

  const fetchingNames = async () => {
    const res = await axios.get("http://localhost:5000/users");
    setNames(res.data);
  };

  const handleAdd = async () => {
    const value = inputRef.current.value;
    if (!value.trim()) return;

    const res = await axios.post("http://localhost:5000/users", {
      name: value,
    });

    setNames((prev) => [...prev, res.data]);
    inputRef.current.value = "";
  };

  const handleDel = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    setNames((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredNames = names.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    status ? fetchingNames() : setNames([]);
  }, [status]);

  return (
    <div className="p2-container">
        <Snowfall color="blue"/>
      <h1 className="p2-title">📋 List of Names</h1>

      <button className="p2-toggle" onClick={() => setStatus((p) => !p)}>
        {status ? "Hide All" : "Show All"}
      </button>

      <div className="p2-add-box">
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter name..."
          className="p2-input"
        />
        <button className="p2-add-btn" onClick={handleAdd}>
          Add
        </button>
      </div>

      <input
        type="text"
        className="p2-search"
        placeholder="Search name..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="p2-list">
        {filteredNames.map((item) => (
          <li className="p2-item" key={item.id}>
            <span className="p2-name">{item.name}</span>
            <button
              className="p2-delete-btn"
              onClick={() => handleDel(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page2;
