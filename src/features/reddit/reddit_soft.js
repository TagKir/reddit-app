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

export const searchComments = createAsyncThunk(
  "comments/searchComments",
  async (item) => {
    const encoded = encodeURI(`https://www.reddit.com/comments/${item}.json`);
    const response = await fetch(encoded);
    const answer = await response.json();
    return answer[1].data.children;
  }
);

export const getUsers = createAsyncThunk("user", async (item) => {
  const about_encoded = encodeURI(
    `https://www.reddit.com/user/${item}/about.json`
  );
  const about_response = await fetch(about_encoded);
  const about = await about_response.json();

  const comments_encoded = encodeURI(
    `https://www.reddit.com/user/${item}/comments.json`
  );
  const comments_response = await fetch(comments_encoded);
  const comments = await comments_response.json();

  return {
    ...about.data,
    ...comments.data,
  };
});
