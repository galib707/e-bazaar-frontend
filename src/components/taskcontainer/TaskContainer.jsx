import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { chageDeleteAdStatus } from "../../features/deleteAdSlicer";
import { chageAdLodingStatus, getAllAd } from "../../features/getallAdd";
import Card from "../card/Card";
import "./styles.css";

function TaskContainer() {
  const dispatch = useDispatch();
  const ads = useSelector((state) => state.ads);
  const deleteAd = useSelector((state) => state.deleteAd);

  if (!ads.isAllAdLoded) {
    dispatch(getAllAd());
    dispatch(chageAdLodingStatus());
  }

  return (
    <div className="task-container">
      <div className="task-inner-container">
        <div className="backlog">
          <div className="backlog-title">
            <div className="backlog-title-text">New posts</div>
            <div className="three-dots">...</div>
          </div>
          {/* <div className="task-image-container"> */}
          {ads.allAds.length !== 0 &&
            ads.allAds.map((item) => <Card ad={item} />)}
          {/* </div> */}
        </div>
        {/* <div className="in-progress">
          <div className="in-porgress-title">
            <div className="in-porgress-text">Top seller</div>
            <div className="three-dots">...</div>
          </div>
          <div className="task-image-container"></div>
        </div> */}
        {/* <div className="completed">
          <div className="completed-title">
            <div className="completed-text">Techs</div>
            <div className="three-dots">...</div>
          </div>
          <div className="task-image-container"></div>
        </div> */}
        {/* <div className="add-another">
          <div className="add-another-title">
            <div className="add-another-text">Other items</div>
            <div className="plus">+</div>
          </div>
          <div className="task-image-container"></div>
        </div> */}
      </div>
    </div>
  );
}

export default TaskContainer;
