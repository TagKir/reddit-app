import { createSlice } from "@reduxjs/toolkit";
import { test_data } from "../../store/test-data";

export const postSlice = createSlice({
  name: "posts",
  initialState: test_data,
  reducers: {},
});

export const { increment, decrement, incrementByAmount } = postSlice.actions;
export const selectPosts = (state) => state.posts;
export default postSlice.reducer;
