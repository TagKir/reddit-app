import { createAsyncThunk } from "@reduxjs/toolkit";

export async function popular() {
  const response = await fetch("https://www.reddit.com/r/popular.json");
  const answer = await response.json();
  return answer.data.children;
}
