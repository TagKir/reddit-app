import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./searchBar.css";
import { popular, searchPosts } from "../../features/reddit/reddit_soft";

function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (search) dispatch(searchPosts(search));
        else dispatch(popular());
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
