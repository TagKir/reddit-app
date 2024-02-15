import { createSlice } from "@reduxjs/toolkit";
import { test_data } from "../../store/test-data";
import { popular } from "../../app/reddit_soft/reddit_soft.js";

export const postSlice = createSlice({
  name: "posts",
  initialState: await popular(),
  reducers: {},
  extraReducers: {
    [popular.fulfilled]: (state, action) => {
      return action.payload.data;
    },
  },
});

export const selectPosts = (state) => state.posts;
export default postSlice.reducer;
