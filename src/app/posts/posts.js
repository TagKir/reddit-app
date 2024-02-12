import React from "react";
import { selectPosts } from "../../features/posts/postSlice";
import { useSelector } from "react-redux";
import "./posts.css";

function Posts() {
  const posts = useSelector(selectPosts);

  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="rating">
            <ul>
              <li>↑</li>
              <li>{post.upvotes - post.downvotes}</li>
              <li>↓</li>
            </ul>
          </div>

          <br />

          <div className="main_inf">
            <h2 className="title">{post.title}</h2>
            <img src={require("../../store/460213.jpeg")} />
          </div>

          <div className="nonmain_inf">
            <p>
              posted by{" "}
              <a href="http://randomcolour.com">{post.author.username}</a>
            </p>
            <p> 1 hour age</p>
            {/* Здесь рисунок комента */}
            <p>{post.comments.length}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
