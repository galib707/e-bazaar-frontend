import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getAllAd = createAsyncThunk("allAd/getAllAd", async () => {
  console.log("get Categories running");
  let response = await fetch(
    "https://web-production-d571.up.railway.app/ad/alladds"
  );
  let data = await response.json();
  console.log("allAds", data);
  return data;
});

const initialState = {
  allAds: [],
  isAllAdLoded: false,
};

const categorySlicer = createSlice({
  name: "allAd",
  initialState,
  reducers: {
    chageAdLodingStatus: (state) => {
      state.isAllAdLoded = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllAd.pending, (state) => {
      console.log("get Categories running");
    });
    builder.addCase(getAllAd.rejected, (state) => {
      console.log("get Categories rejected");
    });
    builder.addCase(getAllAd.fulfilled, (state, action) => {
      console.log("get Categories fulfilled");
      state.allAds = action.payload;
    });
  },
});

export const { chageAdLodingStatus } = categorySlicer.actions;

export default categorySlicer.reducer;

export { getAllAd };
