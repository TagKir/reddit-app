import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectComments } from "../../../store/commentsSlice";
import { getUsers } from "../../../features/reddit/reddit_soft";
import Comment from "../print/comment_print";
import { searchComments } from "../../../features/reddit/reddit_soft";

export default function Comments({ id }) {
  const comments = useSelector(selectComments);
  const dispatch = useDispatch();

  useEffect(() => {
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
          <Comment comment={comment} key={comment.data.id}></Comment>
        ) : (
          ""
        );
      })}
    </div>
  );
}
