import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice";
import commentsSlice from "./commentsSlice";
import usersSlice from "./usersSlice";

export const store = configureStore({
  reducer: {
    posts: postSlice,
    comments: commentsSlice,
    users: usersSlice,
  },
});
