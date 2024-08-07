import React from "react";
import { calculateDifference } from "../../../features/soft/soft";
import "./comment_print.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUsers } from "../../../store/usersSlice";

export default function Comment({ comment }) {
  return (
    <div className="Ccomment" key={comment.data.id}>
      <p className="Cauthor">
        <Link to={`/users/${comment.data.author}`}>{comment.data.author}</Link>
      </p>
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
