import { configureStore } from "@reduxjs/toolkit";
import categorySlicer from "./features/categorySlicer";
import getallAdd from "./features/getallAdd";
import deleteAdSlicer from "./features/deleteAdSlicer";
export default configureStore({
  reducer: {
    category: categorySlicer,
    ads: getallAdd,
    deleteAd: deleteAdSlicer,
  },
});
