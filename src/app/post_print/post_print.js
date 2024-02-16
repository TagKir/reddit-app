import React from "react";
import "./post_print.css";

export default function Post({ post }) {
  const imageUrlRegex = /\.(jpeg|jpg|gif|png)$/i;

  function calculateDaysDifference(unixTime) {
    const now = new Date();
    const pastDate = new Date(unixTime * 1000);
    const differenceInMilliseconds = now - pastDate;
    const differenceInHours = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60)
    );
    return differenceInHours;
  }

  return (
    <div className="post" key={post.id}>
      <div className="top">
        <ul className="rating">
          <li className="arrow">
            <i class="fa-solid fa-arrow-up"></i>
          </li>
          <li>{post.score}</li>
          <li className="arrow">
            <i class="fa-solid fa-arrow-down"></i>
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
        <p>{calculateDaysDifference(post.created)} Hours age</p>
        <div className="comments">
          <i class="fa-regular fa-comments"></i>
          <p>
            <a href="http://randomcolour.com">{post.num_comments}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
