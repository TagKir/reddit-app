import { createSlice } from "@reduxjs/toolkit";
import { searchComments } from "../features/reddit/reddit_soft.js";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchComments.pending, (state) => {
        return "";
      })
      .addCase(searchComments.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const selectComments = (state) => state.comments;
export default commentsSlice.reducer;
