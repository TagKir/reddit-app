import React from "react";
import "./postPage.css";
import Post from "../print/post_print";
import { selectPosts } from "../../../features/posts/postSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const { postId } = useParams();
  const posts = useSelector(selectPosts);
  const post = posts.find((p) => p.data.id === postId);
  return (
    <div className="postPage">
      {post ? (
        <Post post={post.data} />
      ) : (
        <div className="loading">...Loading</div>
      )}
    </div>
  );
}
