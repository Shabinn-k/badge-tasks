import React from "react";
import Props from "./Props";
import "../css/Props.css";
import Snowfall from "react-snowfall";

const PropsParent = () => {
  return (
    <div className="bp-container">
      <Snowfall color="orange"/>
      <h1 className="bp-title">👤 Users</h1>

      <div className="bp-list">
        <Props name="Shabin" />
        <Props name="Ronaldo" age={20} />
      </div>
    </div>
  );
};

export default PropsParent;
