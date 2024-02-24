import React, { useEffect } from "react";
import { searchComments } from "../../../features/reddit/reddit_soft";
import { useDispatch, useSelector } from "react-redux";
import { selectComments, deleteComments } from "../../../store/commentsSlice";
import Comment from "../print/comment_print";

export default function Comments({ id }) {
  const comments = useSelector(selectComments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteComments());
    dispatch(searchComments(id));
  }, []);

  if (!Array.isArray(comments)) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="Ccomments">
      {comments.map((comment) => {
        return comment.data.author !== "AutoModerator" &&
          comment.kind == "t1" ? (
          <Comment comment={comment}></Comment>
        ) : (
          ""
        );
      })}
    </div>
  );
}
