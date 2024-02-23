import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice";
import commentsSlice from "./commentsSlice";

export const store = configureStore({
  reducer: {
    posts: postSlice,
    comments: commentsSlice,
  },
});
