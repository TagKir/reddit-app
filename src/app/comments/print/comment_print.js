import React from "react";
import { calculateDifference } from "../../../features/soft/soft";
import "./comment_print.css";

export default function Comment({ comment }) {
  return (
    <div className="Ccomment" key={comment.data.id}>
      <p className="Cauthor">{comment.data.author}</p>
      <p className="Cdata">{calculateDifference(comment.data.created)}</p>
      <ul className="Crating">
        <li className="Carrow">
          <i className="fa-solid fa-arrow-up"></i>
        </li>
        <li>{comment.data.score}</li>
        <li className="Carrow">
          <i className="fa-solid fa-arrow-down"></i>
        </li>
      </ul>
      <p className="Cbody">{comment.data.body}</p>
    </div>
  );
}
