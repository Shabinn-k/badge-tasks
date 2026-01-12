import React from "react";
import TrafficLight from "./TrafficLight/TrafficLight";
import TodoRedux from "./redux/TodoRedux";
import Page2 from "./components/Page2";
import Page1 from "./components/Page1";
import { Routes, Route, Link } from "react-router-dom";
import PropsParent from "./props/PropsParent";
import Page5 from "./components/Page5";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import "./css/App.css";

function App() {
  return (
    <div className="app-container">
      <nav className="app-nav">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/traffic" className="nav-btn">Traffic</Link>
        <Link to="/fetch" className="nav-btn">Fetch</Link>
        <Link to="/reduxTodo" className="nav-btn">ReduxTodo</Link>
        <Link to="/props" className="nav-btn">Props</Link>
        <Link to="/drop" className="nav-btn">Dropdown</Link>
        <Link to="/hoc" className="nav-btn">useCallback</Link>
        <Link to="/timer" className="nav-btn">Timer</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/traffic" element={<TrafficLight />} />
        <Route path="/fetch" element={<Page2 />} />
        <Route path="/reduxTodo" element={<TodoRedux />} />
        <Route path="/props" element={<PropsParent />} />
        <Route path="/drop" element={<Page5 />} />
        <Route path="/hoc" element={<Page3 />} />
        <Route path="/timer" element={<Page4 />} />
      </Routes>
    </div>
  );
}

export default App;
