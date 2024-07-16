import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import User from "../print/user_print";
import { getUsers } from "../../../features/reddit/reddit_soft";
import { selectUsers } from "../../../store/usersSlice";

export default function Users() {
  const dispatch = useDispatch();
  const user = useSelector(selectUsers);
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getUsers(userId));
  }, []);

  if (user === "Loading") {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="users">
      <User user={user} />
    </div>
  );
}
