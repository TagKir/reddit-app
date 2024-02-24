import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../features/reddit/reddit_soft.js";

export const usersSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers) //
      .addCase(searchPosts.pending, (state) => {
        return "";
      });
  },
});
export const selectPosts = (state) => state.posts;

export default usersSlice.reducer;
