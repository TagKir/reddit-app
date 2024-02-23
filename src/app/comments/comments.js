import React, { useEffect } from "react";
import { searchComments } from "../../features/reddit/reddit_soft";
import { useDispatch, useSelector } from "react-redux";
import { selectComments } from "../../store/commentsSlice";
import { calculateDifference } from "../../features/soft/soft";
import "./comments.css";

export default function Comments({ id }) {
  const comments = useSelector(selectComments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchComments(id));
  }, []);
  return (
    <div className="comments">
      {comments.map((comment) => {
        return (
          <div className="comment">
            <p>{comment.data.author}</p>
            <p>{calculateDifference(comment.data.created)}</p>
            <p>{comment.data.body}</p>
            <ul className="rating">
              <li className="arrow">
                <i className="fa-solid fa-arrow-up"></i>
              </li>
              <li>{comment.data.score}</li>
              <li className="arrow">
                <i className="fa-solid fa-arrow-down"></i>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
