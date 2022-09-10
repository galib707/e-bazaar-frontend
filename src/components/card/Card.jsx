import React from "react";
import "./styles.css";
function Card() {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="image">
          <img src="./photo.avif" alt="" />
        </div>
        <div className="title">Lorem, ipsum.</div>
        <div className="tags">
          <p>design</p>
          <p>wrtiting</p>
        </div>
        <div className="card-bottom"></div>
      </div>
    </div>
  );
}

export default Card;
