import React from "react";
import { selectPosts } from "../../../features/posts/postSlice";
import { useSelector } from "react-redux";
import "./posts_work.css";

// Components
import Post from "../print/post_print";

function Posts() {
  const posts = useSelector(selectPosts);

  if (!Array.isArray(posts) || posts.length === 0) {
    return <div className="loading">Loading...</div>;
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
