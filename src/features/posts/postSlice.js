import { createSlice } from "@reduxjs/toolkit";
import { popular, searchPosts } from "../reddit/reddit_soft.js";

export const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(popular.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(searchPosts.pending, (state) => {
        return "";
      })
      .addCase(searchPosts.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const selectPosts = (state) => state.posts;

export default postSlice.reducer;
