import React from "react";
import "./postPage.css";
import Post from "../print/post_print";
import Comments from "../../comments/comments";
import { selectPosts } from "../../../store/postSlice";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function PostPage() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const posts = useSelector(selectPosts);
  const post = posts.find((p) => p.data.id === postId);
  return (
    <div className="postPage">
      <button className="back" onClick={() => navigate("/")}>
        back
      </button>
      {post ? (
        <Post post={post.data} />
      ) : (
        <div className="loading">...Loading</div>
      )}
      <Comments id={postId} />
    </div>
  );
}
