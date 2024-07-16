import React from "react";
import { calculateDifference } from "../../../features/soft/soft";
import Comment from "../../comments/print/comment_print";
import "./user_print.css";

export default function User({ user }) {
  const time = calculateDifference(user.created_utc);
  return (
    <div className="user">
      <div className="user_info">
        <img src={user.snoovatar_img} className="avatar" />
        <p className="name">{user.name}</p>
        <div className="newline"></div>
        <p className="time">created {time}</p>
      </div>
      <div className="comments">
        {user.children.map((comment) => {
          return (
            <div className="Ucomment" key={comment.data.id}>
              <p className="Udata">
                {calculateDifference(comment.data.created)}
              </p>
              <ul className="Urating">
                <li className="Uarrow">
                  <i className="fa-solid fa-arrow-up"></i>
                </li>
                <li>{comment.data.score}</li>
                <li className="Uarrow">
                  <i className="fa-solid fa-arrow-down"></i>
                </li>
              </ul>
              <p className="Ubody">{comment.data.body}</p>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}
