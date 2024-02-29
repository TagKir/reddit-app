import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectUsers } from "../../../store/usersSlice";
import User from "../print/user_print";

export default function Users() {
  const comments = useSelector(selectUsers);
  const { userId } = useParams();

  useEffect(() => {
    /* dispatch(searchComments(id)); */
  }, []);

  /* if (!Array.isArray(comments)) {
    return <div className="loading">Loading...</div>;
  } */

  return (
    <div className="users">
      <User />
    </div>
  );
}
