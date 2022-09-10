import React from "react";
import Card from "../card/Card";
import "./styles.css";

function TaskContainer() {
  return (
    <div className="task-container">
      <div className="task-inner-container">
        <div className="backlog">
          <div className="backlog-title">
            <div className="backlog-title-text">New posts</div>
            <div className="three-dots">...</div>
          </div>
          <div className="task-image-container">
            <Card />
          </div>
        </div>
        <div className="in-progress">
          <div className="in-porgress-title">
            <div className="in-porgress-text">Top seller</div>
            <div className="three-dots">...</div>
          </div>
          <div className="task-image-container"></div>
        </div>
        <div className="completed">
          <div className="completed-title">
            <div className="completed-text">Techs</div>
            <div className="three-dots">...</div>
          </div>
          <div className="task-image-container"></div>
        </div>
        <div className="add-another">
          <div className="add-another-title">
            <div className="add-another-text">Other items</div>
            <div className="plus">+</div>
          </div>
          <div className="task-image-container"></div>
        </div>
      </div>
    </div>
  );
}

export default TaskContainer;
