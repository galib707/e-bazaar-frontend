import React from "react";
import "./styles.css";
function UploadAd() {
  return (
    <div className="uploade-ad-container">
      <form action="" method="post" class="form-for-Add">
        <div className="form-block">
          <label for="name">Enter product name </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="form-block">
          <label for="name">Price </label>
          <input type="Number" name="name" id="name" required />
        </div>
        <div className="form-block">
          <label for="name">Enter description </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="form-block">
          <label for="name">upload an image file </label>
          <input
            type="file"
            id="product-image"
            name="produc-image"
            accept="image/png, image/jpeg"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UploadAd;
