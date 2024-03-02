import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../features/reddit/reddit_soft.js";

export const usersSlice = createSlice({
  name: "users",
  initialState: "Loading",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        return "Loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});
export const selectUsers = (state) => state.users;

export default usersSlice.reducer;
