import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const dleteAnAd = createAsyncThunk("deleteAd/dleteAnAd", async (id) => {
  console.log("id for deleting ad", id);
  console.log("get Categories running");
  let response = await fetch(
    `https://web-production-d571.up.railway.app/ad/delete/${id}`,
    {
      method: "DELETE",
      mode: "cors",
    }
  );
  //   let data = await response.json();
  //   console.log("data", data);
  //   return data;
  console.log(response);
});

const initialState = {
  isAdDelted: false,
};

const categorySlicer = createSlice({
  name: "deleteAd",
  initialState,
  reducers: {
    chageDeleteAdStatus: (state) => {
      state.isAdDelted = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(dleteAnAd.pending, (state) => {
      console.log("get deleteAd running");
    });
    builder.addCase(dleteAnAd.rejected, (state) => {
      console.log("get deleteAd rejected");
    });
    builder.addCase(dleteAnAd.fulfilled, (state, action) => {
      console.log("get deleteAd fulfilled");
      state.isAdDelted = true;
    });
  },
});

export const { chageDeleteAdStatus } = categorySlicer.actions;

export default categorySlicer.reducer;

export { dleteAnAd };
