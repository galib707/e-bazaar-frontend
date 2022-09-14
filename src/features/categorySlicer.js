import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getCategories = createAsyncThunk("category/getCategories", async () => {
  console.log("get Categories running");
  let response = await fetch(
    "https://web-production-d571.up.railway.app/category/allcategories"
  );
  let data = await response.json();
  console.log("data", data);
  return data;
});

const initialState = {
  allCategories: [],
  isCategoryLoded: false,
};

const categorySlicer = createSlice({
  name: "category",
  initialState,
  reducers: {
    changeCategoryLoadingStatus: (state) => {
      state.isCategoryLoded = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      console.log("get Categories running");
    });
    builder.addCase(getCategories.rejected, (state) => {
      console.log("get Categories rejected");
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      console.log("get Categories fulfilled");
      state.allCategories = action.payload;
    });
  },
});

export const { changeCategoryLoadingStatus } = categorySlicer.actions;

export default categorySlicer.reducer;

export { getCategories };
