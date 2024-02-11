import React from "react";
import "./searchBar.css";

function SearchBar() {
  return (
    <form>
      <input className="search" placeholder="Search any post" />
      <input className="submit" type="submit" hidden />
    </form>
  );
}

export default SearchBar;
