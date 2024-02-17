import React, { useEffect } from "react";
import { selectPosts } from "../../features/posts/postSlice";
import { store } from "../../store/store.js";
import { useSelector, useDispatch } from "react-redux";
import { popular } from "../../features/reddit/reddit_soft";
import "./posts.css";

// Components
import Post from "../post_print/post_print";

function Posts() {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(popular());
  }, []);

  if (!Array.isArray(posts) || posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="posts">
      {posts.map((postInfo) => (
        <Post post={postInfo.data} key={postInfo.data.id} />
      ))}
    </div>
  );
}

export default Posts;
