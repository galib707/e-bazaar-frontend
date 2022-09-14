import React from "react";
import { useDispatch } from "react-redux";
import { postAd } from "../../features/uploadAd";
import "./styles.css";
function UploadAd() {
  const dispatch = useDispatch();
  return (
    <div className="uploade-ad-container">
      <form
        action=""
        method="post"
        class="form-for-Add"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
          let data = new FormData(e.target);

          dispatch(postAd(data));
        }}
      >
        <div className="form-block">
          <label for="name">Enter product name </label>
          <input type="text" name="title" id="name" required />
        </div>
        <div className="form-block">
          <label for="name">Price </label>
          <input type="Number" name="price" id="name" required />
        </div>
        <div className="form-block">
          <label for="name">Enter description </label>
          <input type="text" name="description" id="name" required />
        </div>
        <div className="form-block">
          <label for="name">upload an image file </label>
          <input
            type="file"
            id="product-image"
            name="image"
            accept="image/png, image/jpeg"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UploadAd;
