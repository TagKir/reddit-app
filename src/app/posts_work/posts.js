import React from "react";
import { selectPosts } from "../../features/posts/postSlice";
import { useSelector } from "react-redux";
import "./posts.css";

// Components
import Post from "../post_print/post_print";

function Posts() {
  const posts = useSelector(selectPosts);

  return (
    <div className="posts">
      {posts.map((postInfo) => (
        <Post post={postInfo.data} key={postInfo.data.id} />
      ))}
    </div>
  );
}

export default Posts;
