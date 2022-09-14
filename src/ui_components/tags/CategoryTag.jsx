import React from "react";
import "./styles.css";
function CategoryTag(props) {
  return (
    <div className="category-tag">
      <p>{props.item.name}</p>
    </div>
  );
}

export default CategoryTag;
