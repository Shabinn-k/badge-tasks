import React, { useCallback } from "react";
import "../css/Page3.css";
import Snowfall from "react-snowfall";

function Page3() {
  const handleClick = useCallback(() => {
    console.log("clicked button");
  }, []);

  return (
    <div className="cb-container">
        <Snowfall color="white"/>
      <h1 className="cb-title">useCallback Demo</h1>
      <button className="cb-btn" onClick={handleClick}>
        Click
      </button>
    </div>
  );
}

export default Page3;