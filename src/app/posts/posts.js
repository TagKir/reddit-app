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
          <div className="main_inf">
            <h2 className="title">{post.title}</h2>
            <img src={post.image_url} />
          </div>
          <div className="nonmain_inf">
            <p className="author">
              posted by <a>{post.author.username}</a>
              {/* Здесь будет React Router */}
            </p>
            <p className="time">1 hour age</p>
            {/* Здесь должна быть картинка коммента */}
            <p>{post.comments.length}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
