import React from "react";
import "./post_print.css";

export default function Post({ post }) {
  return (
    <div className="post" key={post.id}>
      <div className="top">
        <ul className="rating">
          <li className="arrow">
            <i class="fa-solid fa-arrow-up"></i>
          </li>
          <li>{post.upvotes - post.downvotes}</li>
          <li className="arrow">
            <i class="fa-solid fa-arrow-down"></i>
          </li>
        </ul>
        <h2 className="title">{post.title}</h2>
      </div>

      <img src={require("../../store/460213.jpeg")} className="shrek" />

      <div className="nonmain_inf">
        <p>
          posted by <a href="http://randomcolour.com">{post.author.username}</a>
        </p>
        <p>1 hour age</p>
        <div className="comments">
          <i class="fa-regular fa-comments"></i>
          <p>
            <a href="http://randomcolour.com">{post.comments.length}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
