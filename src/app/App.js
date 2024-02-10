import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import logo from "../logo.png";
// components
import SearchBar from "./search/searchBar";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="logo" alt="reddit-logo" />
        <span className="by">by tagirkiky</span>
      </header>
      <SearchBar />
    </div>
  );
}

export default App;
