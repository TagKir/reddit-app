import { createAsyncThunk } from "@reduxjs/toolkit";

export const popular = createAsyncThunk("posts/popular", async () => {
  const response = await fetch("https://www.reddit.com/r/popular.json");
  const answer = await response.json();
  return answer.data.children;
});

export const searchPosts = createAsyncThunk(
  "posts/searchPosts",
  async (item) => {
    const encoded = encodeURI(`https://www.reddit.com/search.json?q=${item}`);
    const response = await fetch(encoded);
    const answer = await response.json();
    return answer.data.children;
  }
);
