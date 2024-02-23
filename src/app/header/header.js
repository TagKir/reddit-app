import React from "react";
import SearchBar from "../search_work/searchBar";
import "./header.css";
import logo from "../../logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <img
        src={logo}
        className="logo"
        alt="reddit-logo"
        onClick={() => navigate("/")}
      />
      <div className="searchbar">
        <SearchBar />
      </div>
    </header>
  );
}
