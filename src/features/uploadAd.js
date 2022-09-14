import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import deleteAdSlicer from "./deleteAdSlicer";

const postAd = createAsyncThunk("postAdtoDB/postAd", async (dataObj) => {
  console.log("post ad is running", dataObj);
  //   let postAdObj = {
  //     title: dataObj.name,
  //     descrition: dataObj.descrition,
  //     price: dataObj.price,
  //     seller: "62fe15939fbe9112b138c0de",
  //     category: "62fe272d125f6d32169ca37e",
  //   };
  dataObj.append("seller", "62fe15939fbe9112b138c0de");
  dataObj.append("category", "62fe272d125f6d32169ca37e");

  let response = await fetch("https://web-production-d571.up.railway.app/ad/", {
    method: "POST",
    body: dataObj,
    mode: "cors",
  });
  let data = await response.json();
  console.log("allAds", data);
  return data;
});

const initialState = {
  productName: "",
  productDescription: "",
  price: "",
  image: "",
};

const uploadAd = createSlice({
  name: "postAdtoDB",
  initialState,
  reducers: {
    getProductName: (state, action) => {
      state.productName = action.payload;
    },
    getProductDescription: (state, action) => {
      state.productDescription = action.payload;
    },
    getPrice: (state, action) => {
      state.price = action.payload;
    },
    getImage: (state, action) => {
      state.image = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postAd.pending, (state) => {
      console.log("post ad is running");
    });
    builder.addCase(postAd.rejected, (state) => {
      console.log("post ad is rejected");
    });
    builder.addCase(postAd.fulfilled, (state, action) => {
      console.log("post ad is fulfilled");
    });
  },
});

export const {} = uploadAd.actions;

export default uploadAd.reducer;

export { postAd };
