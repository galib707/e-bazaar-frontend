import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import {
  changeCategoryLoadingStatus,
  getCategories,
} from "../../features/categorySlicer";
import CategoryTag from "../../ui_components/tags/CategoryTag";

function Subnavbar() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);

  if (!category.isCategoryLoded) {
    dispatch(getCategories());
    dispatch(changeCategoryLoadingStatus());
  }

  return (
    <div className="sub-navbar">
      {category.allCategories.length !== 0 &&
        category.allCategories.map((item) => <CategoryTag item={item} />)}
    </div>
  );
}

export default Subnavbar;
