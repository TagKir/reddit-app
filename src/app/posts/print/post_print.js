import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./post_print.css";
import { calculateDifference } from "../../../features/soft/soft";

export default function Post({ post, situation }) {
  const imageUrlRegex = /\.(jpeg|jpg|gif|png)$/i;
  const navigate = useNavigate();

  const onClick = (e) => {
    if (e.target.href !== `http://localhost:3000/users/${post.author}`) {
      navigate(`posts/${post.id}`);
    }
  };

  return (
    <div
      className={situation == "lots" ? "post notsolo" : "post"}
      onClick={situation == "lots" ? onClick : () => {}}
    >
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
          posted by <Link to={`/users/${post.author}`}>{post.author}</Link>
        </p>
        <p>{calculateDifference(post.created)}</p>
        <div className="comments">
          <i className="fa-regular fa-comments"></i>
          <p>{post.num_comments}</p>
        </div>
      </div>
    </div>
  );
}
