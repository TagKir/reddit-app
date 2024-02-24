import { createSlice } from "@reduxjs/toolkit";
import { searchComments } from "../features/reddit/reddit_soft.js";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: [],
  reducers: {
    deleteComments(state) {
      return [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchComments.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectComments = (state) => state.comments;
export const { deleteComments } = commentsSlice.actions;
export default commentsSlice.reducer;
