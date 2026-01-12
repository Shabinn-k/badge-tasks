import React, { useState } from "react";
import "../css/Page5.css";
import Snowfall from "react-snowfall";

const Page5 = () => {
  const options = ["react", "vue", "vanilla", "hyy"];
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);

  const handleToggle = (option) => {
    setList((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="dd-container">
      <Snowfall color="brown"/>
      <h1 className="dd-title">🌿 Dropdown Select</h1>

      <button className="dd-toggle" onClick={() => setOpen(!open)}>
        Select Items
      </button>

      {open && (
        <div className="dd-menu">
          {options.map((option) => (
            <label key={option} className="dd-option">
              <input
                type="checkbox"
                checked={list.includes(option)}
                onChange={() => handleToggle(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}

      <ul className="dd-selected">
        {list.map((item) => (
          <li key={item} className="dd-chip">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page5;
