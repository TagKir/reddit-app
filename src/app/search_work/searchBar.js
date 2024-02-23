import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./searchBar.css";
import { popular, searchPosts } from "../../features/reddit/reddit_soft";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (search) dispatch(searchPosts(search));
        else dispatch(popular());
        navigate("/");
      }}
    >
      <input
        className="search"
        placeholder="Search any post"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <input className="submit" type="submit" hidden />
    </form>
  );
}

export default SearchBar;
