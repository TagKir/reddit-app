import React from "react";
import "./post_print.css";
import { calculateDifference } from "../../../features/soft/soft";

export default function Post({ post }) {
  const imageUrlRegex = /\.(jpeg|jpg|gif|png)$/i;

  return (
    <div className="post">
      <div className="top">
        <ul className="rating">
          <li className="arrow">
            <i className="fa-solid fa-arrow-up"></i>
          </li>
          <li>{post.score}</li>
          <li className="arrow">
            <i className="fa-solid fa-arrow-down"></i>
          </li>
        </ul>
        <h2 className={imageUrlRegex.test(post.url) ? "title" : "main_title"}>
          {post.title}
        </h2>
      </div>

      {imageUrlRegex.test(post.url) ? (
        <img src={post.url} className="shrek" />
      ) : (
        ""
      )}

      <div className="nonmain_inf">
        <p>
          posted by <a href="http://randomcolour.com">{post.author}</a>
        </p>
        <p>{calculateDifference(post.created)}</p>
        <div className="comments">
          <i className="fa-regular fa-comments"></i>
          <p>
            <a href="http://randomcolour.com">{post.num_comments}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
