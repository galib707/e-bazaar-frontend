import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { chageDeleteAdStatus, dleteAnAd } from "../../features/deleteAdSlicer";
import { getAllAd } from "../../features/getallAdd";
import CategoryTag from "../../ui_components/tags/CategoryTag";
import "./styles.css";
function Card(props) {
  const dispatch = useDispatch();
  const deleteAd = useSelector((state) => state.deleteAd);
  if (deleteAd.isAdDelted) {
    dispatch(getAllAd());
    dispatch(chageDeleteAdStatus());
  }
  return (
    <div className="card">
      <div className="card-inner">
        <div className="image">
          <img
            src={
              "https://web-production-d571.up.railway.app/" + props.ad.imageUrl
            }
            alt=""
          />
        </div>
        <div className="title">{props.ad.title}</div>
        <div className="tags">
          <>{<CategoryTag item={props.ad.category} />}</>
          <p style={{ fontSize: "10px", marginBlock: "8px" }}>
            {props.ad.description}
          </p>
          <p> Price: {props.ad.price}</p>
          <p> </p>
        </div>
        <div className="card-bottom">
          <div className="likes">❤️</div>
          <div
            className="del"
            onClick={() => dispatch(dleteAnAd(props.ad._id))}
          >
            ❌
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
