import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
function Navbar() {
  const goTo = useNavigate();
  return (
    <div className="navbar">
      <div className="left">
        <div className="icon-brand">
          <div className="icon">🛒</div>
          {/* <div className="brand">Tullo</div> */}
        </div>
        <div className="dev-challenge">eBazaar</div>
      </div>

      <div className="mid">
        <div className="filter" onClick={() => goTo("/upload")}>
          Sell
        </div>
      </div>

      <div className="right">
        <div className="search">
          <input
            className="search-field-input"
            type="text"
            placeholder=" searh to buy..."
          />
          <div className="search-field-type">Search</div>
        </div>
        <div className="avatar-and-name">
          <div className="avatar">
            <img src="./logo512.png" alt="" />
          </div>
          <div className="name">Timmy</div>
          <div className="down-arrow">▼ </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
