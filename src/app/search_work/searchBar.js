import React, { useEffect, useState } from "react";
import "./searchBar.css";

function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <form>
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
