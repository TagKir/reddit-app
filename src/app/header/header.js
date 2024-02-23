import React from "react";
import SearchBar from "../search_work/searchBar";
import "./header.css";
import logo from "../../logo.png";

export default function Header() {
  return (
    <header>
      <img src={logo} className="logo" alt="reddit-logo" />
      <div className="searchbar">
        <SearchBar />
      </div>
    </header>
  );
}
